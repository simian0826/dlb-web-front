import axios from 'axios'

let api = '/api/faq/open';
function getAccessToken(){
  return sessionStorage.getItem('access_token');
};
function getAreaId(){
  return sessionStorage.getItem('area_id');
};
function getRoleId(){
  return sessionStorage.getItem('role_id');
};
function getRoleName(){
  return sessionStorage.getItem('role_name');
};
const TIME_OUT = 30000;

export const CATEGORORY_LIST_API = `${api}/categories.json`;
export const QUESTION_DETAIL_API = `${api}/knowledge/category/{categoryId}.json`;
export const KNOWLEDGE_DETAIL_API = `${api}/knowledge/{id}.json`;
export const OTHER_QUESTION_CREATE_API = `${api}/work/order/create.json`;
export const QUESTION_RECORD_API = `${api}/work/order/faq.json`;


export const UPLOAD_IMG_API =  `/api/file/{module}/image/upload.json`;



 function getData(arg) {
  return axios({
    url: arg.url,
    method: 'GET',
    headers: {
      'Authorization':  getAccessToken()
    },
    params: arg.params || {},
    timeout: TIME_OUT,
  })
}

 function postData(arg) {
  return axios({
    url: arg.url,
    method: 'POST',
    headers: {
      'Authorization':  getAccessToken()
    },
    transformRequest: [function (data) {
      return qs.stringify(data);
    }],
    data: arg.params || {},
    timeout: TIME_OUT,
  });
}

 function postJson(arg) {
    return axios({
        url: arg.url,
        method: 'POST',
        headers: {
            'Authorization': getAccessToken(),
        },
        data: arg.params || {},
        timeout: TIME_OUT,
    });
}

export async function getCategoryListApi() {
  let path = CATEGORORY_LIST_API
  return getData({
    url: path,
  })
}

export async function getQuestionDetail(id) {
  let path = QUESTION_DETAIL_API.replace('{categoryId}', id)
  return getData({
    url: path,
  })
}
export async function getKnowledgeDetail(id) {
  let path = KNOWLEDGE_DETAIL_API.replace('{id}', id)
  return getData({
    url: path,
  })
}
export async function createOtherQuestion(params) {
  let path = OTHER_QUESTION_CREATE_API
  return postJson({
    url: path,
    params:params
  })
}

export async function questionRecord(params) {
  let path = QUESTION_RECORD_API
  return getData({
    url: path,
  })
}


export async function uploadImgApi(params) {
  let path = UPLOAD_IMG_API.replace('{module}', 'gd')
  return axios({
    url: path,
    method: 'post',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
      "Authorization": getAccessToken()
    },
    data: params,
    //params: params,
  });
}
