import NotFound from './views/404.vue'
import BaseContainer from './layout/BaseContainer.vue'
import Home from './views/home/Home.vue'

import {
  LOGIN,
  PAGE404,
} from '@/api/url-constants-front'
let routes = [
    {
      path: '/',
      component: BaseContainer,
      name: '',
      children:[
        {
          path: '/',
          component: Home,
          name: '首页',
        },
      ]
    },

    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: PAGE404 }
    }
];

export default routes;
