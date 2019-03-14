import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: "Home",
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      categories:[
        {
          id:1,
          icon:'/static/imgs/category1.png',
          title:'家装材料',
          children:[
            {
              id:1,
              title: "主材"
            },
            {
              id:2,
              title: "辅材"
            }
          ]
        },
        {
          id:1,
          icon:'/static/imgs/category2.png',
          title:'工装材料',
          children:[
            {
              id:1,
              title: "主材"
            },
            {
              id:2,
              title: "辅材"
            }
          ]
        },
        {
          id:1,
          icon:'/static/imgs/category3.png',
          title:'装饰设计',
          children:[
            {
              id:1,
              title: "家装"
            },
            {
              id:2,
              title: "公装"
            }
          ]
        },
        {
          id:1,
          icon:'/static/imgs/category4.png',
          title:'建筑材料',
          children:[
            {
              id:1,
              title: "围栏围墙"
            },
            {
              id:2,
              title: "大门"
            },
            {
              id:3,
              title: "室外遮阳"
            }
          ]
        },
        {
          id:1,
          icon:'/static/imgs/category5.png',
          title:'园林景观',
          children:[
            {
              id:1,
              title: "室内"
            },
            {
              id:2,
              title: "室外"
            }
          ]
        },
        {
          id:1,
          icon:'/static/imgs/category6.png',
          title:'机电设备',
          children:[
            {
              id:1,
              title: "变压器"
            },
            {
              id:2,
              title: "电源装置"
            },
            {
              id:3,
              title: "应急电源"
            }
          ]
        },
        {
          id:1,
          icon:'/static/imgs/category7.png',
          title:'业主单位',
          children:[
            {
              id:1,
              title: "房地产"
            },
            {
              id:2,
              title: "代理业主"
            },
            {
              id:3,
              title: "企事业单位"
            }
          ]
        },
        {
          id:1,
          icon:'/static/imgs/category8.png',
          title:'其他',
          children:[
            {
              id:1,
              title: "管材管件"
            },
            {
              id:2,
              title: "阀门"
            },
            {
              id:3,
              title: "仪表"
            }
          ]
        },
      ]
    }
  },
  methods:{
    test(i){

      console.log(i);
    }
  },
  mounted(){
    let mySwiper = new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
      pagination: {
        el: '.swiper-pagination',
        type : 'bullets',

      },
    })
  }
};

