import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import Layout from '../views/Layout.vue'
import ShowOnlyMusic from '../views/ShowOnlyMusic.vue'

const router = new VueRouter({
  mode: 'hash',
  base:process.env.BASE_URL,
  linkActiveClass:"active",
  routes:[
    {
      // name:'Layout',
      path:'/',
      component:Layout,
      children:[
        {
          name:'Home',
          path:'/',
          component:Home
        },
        {
          name:'Mine',
          path:'mine',
          component:Mine
        },
        {
          name:'Search',
          path:'search',
          component:Search,
          children:[
            {
              name:'Moree',
              path:'more/:searchName',
              component:()=>import('../views/Home/MusicMore.vue')
            }
          ]
        },
        {
          name:'Topic',
          path:'topic',
          component:()=>import('../views/Topic.vue')  //异步引用
        },
        {
          name:'More',
          path:'more/:searchName',
          component:()=>import('../views/Home/MusicMore.vue')
        },
        {
          name:'ShowOnlyMusic',
          path:'showOnlyMusic/:id',
          component:ShowOnlyMusic,
        }
      ]
    },
    
  ]
})
router.beforeEach((to,from,next)=>{
  if(to===from) return;
  next();
})
export default router
