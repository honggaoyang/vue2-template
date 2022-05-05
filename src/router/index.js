// 引入依赖
import Vue from "vue"
import VueRouter from "vue-router"

import notFind from "@/components/404/NotFind"

// 使用路由中间件
Vue.use(VueRouter)

const Home = () => import('@/views/home/Home')
const Login = () => import('@/views/login')

const routes = [
    { path: '', redirect: "/home" },
    { path: '/home', name: 'home', component: Home, meta: { title: "首页" } },
    { path: '/login', name: 'login', component: Login, meta: { title: "登录" } },

    // { path: '/course/:type', name: 'course', component: Course, props: true, meta: { title: "课程分类" } },
    // { path: '/courseDetail/:type', name: 'CourseDetail', component: CourseDetail, props: true, meta: { title: "课程介绍" } },

    { path: '*', component: notFind, meta: { title: '404' } },
]

const router = new VueRouter({
    // mode: 'history',
    routes
})




export default router;
