import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const HelloWorld: AsyncComponent = (): any => import('@/components/HelloWorld.vue')
const ShoppingMall:AsyncComponent=():any=>import('@/components/pages/ShoppingMall.vue')
const Decorator:AsyncComponent=():any=>import('@/components/decorator/Decorator.vue')
Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path:'/',
    name:'ShoppingMall',
    component:ShoppingMall
  },
  {
    path:'/parent',
    name:'Decorator',
    component:Decorator
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
