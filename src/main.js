import Vue from "vue";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from "./App";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueHtml5Editor from "vue-html5-editor";
import VueRouter from "vue-router";
import store from "./vuex/store";
import Vuex from "vuex";

import routes from "./routes";

import { Input, Select, Option, Icon, Button } from 'element-ui';
import {RESOURCE_UOLOAD_API} from "./api/url-constants";

Vue.use(Select);
Vue.use(Button);
Vue.use(Option);
Vue.use(Input);
Vue.use(Icon);

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueHtml5Editor, {
    language: "zh-cn",
    hiddenModules:['link'],
    image: {
        // 文件最大体积，单位字节  max file size
        sizeLimit: 2* 1024 * 1024, // 100 * 1024 = 100KB, default 5M
        // 上传参数,默认把图片转为base64而不上传
        upload: {
            url: RESOURCE_UOLOAD_API,
        },
        // 响应数据处理,最终返回图片链接
        uploadHandler(responseText){
            var result = JSON.parse(responseText)
            return result.fullname;
        }
    }
});




const router = new VueRouter({
    routes
});



new Vue({
        router,
        store,
        render: h => h(App)
}).$mount('#app');
