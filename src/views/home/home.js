import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: "Home",
  props:{
    fromParent:String,
  },
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
      ],
      recommendTitles:['家装商家', '公装商家', '项目推荐'],
      companyDecorationRecommend:[
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: true
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: true
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: false
        },
      ],
      familyDecorationRecommend:[
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: true
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: true
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          brand:"办公家具",
          isVip: false
        },
      ],
      projectRecommend:[
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          type:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          type:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          type:"办公家具",
          isVip: true
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          type:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          type:"办公家具",
          isVip: false
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          type:"办公家具",
          isVip: true
        },
        {
          logo:"/static/imgs/jclogo.jpg",
          name:"恒宏办公整装",
          category:"恒宏",
          type:"办公家具",
          isVip: false
        },
      ],
      industryNews:[
        "如果你决定手动选择特性，在操作提示的最后你可以选择将已选项保存为一个将来可复用的 preset。我们会在下一个章节讨论 preset 和插件。",
        "被保存的 preset 将会存在用户的 home 目录下一个名为 .vuerc 的 JSON 文件里。如果你想要修改被保存的 preset / 选项，可以编辑这个文件。",
        "在项目创建的过程中，你也会被提示选择喜欢的包管理器或使用淘宝 npm 镜像源以更快地安装依赖。这些选择也将会存入 ~/.vuerc。",
      ],
      notifications:[
        "如果你决定手动选择特性，在操作提示的最后你可以选择将已选项保存为一个将来可复用的 preset。我们会在下一个章节讨论 preset 和插件。",
        "被保存的 preset 将会存在用户的 home 目录下一个名为 .vuerc 的 JSON 文件里。如果你想要修改被保存的 preset / 选项，可以编辑这个文件。",
        "在项目创建的过程中，你也会被提示选择喜欢的包管理器或使用淘宝 npm 镜像源以更快地安装依赖。这些选择也将会存入 ~/.vuerc。",
      ],
      programInfo:[
        "如果你决定手动选择特性，在操作提示的最后你可以选择将已选项保存为一个将来可复用的 preset。我们会在下一个章节讨论 preset 和插件。",
        "被保存的 preset 将会存在用户的 home 目录下一个名为 .vuerc 的 JSON 文件里。如果你想要修改被保存的 preset / 选项，可以编辑这个文件。",
        "在项目创建的过程中，你也会被提示选择喜欢的包管理器或使用淘宝 npm 镜像源以更快地安装依赖。这些选择也将会存入 ~/.vuerc。",
      ],
      longText: 'webkit-line-clamp 是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他外来的WebKit属性。常见结合属性display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。',
      infoTitles:['询价信息', '项目合作信息'],
      activity:[
        {
          title:'1在一个块元素显示的文本的行数为了实现该',
          date:'2019-08-09',
          address:'在一个块元素显示的文本的行数为了实现该'
        },
        {
          title:'2在一个块元素显示的文本的行数为了实现该',
          date:'2019-08-09',
          address:'在一个块元素显示的文本的行数为了实现该'
        },
        {
          title:'3在一个块元素显示的文本的行数为了实现该',
          date:'2019-08-09',
          address:'在一个块元素显示的文本的行数为了实现该'
        },
        {
          title:'4在一个块元素显示的文本的行数为了实现该',
          date:'2019-08-09',
          address:'在一个块元素显示的文本的行数为了实现该'
        },
        {
          title:'5在一个块元素显示的文本的行数为了实现该',
          date:'2019-08-09',
          address:'在一个块元素显示的文本的行数为了实现该'
        },
        {
          title:'6在一个块元素显示的文本的行数为了实现该',
          date:'2019-08-09',
          address:'在一个块元素显示的文本的行数为了实现该'
        },
        {
          title:'7在一个块元素显示的文本的行数为了实现该',
          date:'2019-08-09',
          address:'在一个块元素显示的文本的行数为了实现该'
        },
        {
          title:'8在一个块元素显示的文本的行数为了实现该',
          date:'2019-08-09',
          address:'在一个块元素显示的文本的行数为了实现该'
        },
        {
          title: '9在一个块元素显示的文本的行数为了实现该',
          date: '2019-08-09',
          address: '在一个块元素显示的文本的行数为了实现该'
        },

      ],
      newsTabTitles:['平台动态','行业资讯'],
      tabs:{
        headers:['供应商客户', '设计施工单位', '开发商及企事业单位',],
        items:['供应商客户', '设计施工单位', '开发商及企事业单位',],
      }
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
    });
    console.log();
  }
};

