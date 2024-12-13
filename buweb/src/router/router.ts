import {createWebHashHistory, createRouter,RouteRecordRaw} from "vue-router";
import Nprogress from "nprogress";
const routes:Array<RouteRecordRaw>=[{
    path:"",
    name:"",
    component:()=>import("../views/home/index.vue"),
    meta:{},
    children:[]
}];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

router.beforeEach(async(_to,_from,next)=>{
   Nprogress.start();
   next();
});

router.afterEach((_to)=>{
    Nprogress.done();
})


export default router;