import {createWebHistory, createRouter,RouteRecordRaw} from "vue-router";
import Nprogress from "nprogress";

const homeRouter:Array<RouteRecordRaw>={
    path:"/",
    name:"",
    component:()=>import("../views/home/components/index.vue"),
    meta:{},
    children:[]
};

export const aboutRouter={
    path:"/about",
    name:"about",
    component:()=>import("../views/about/index.vue"),
    meta:{},
    children:[]
} as RouteRecordRaw;

const modules:Record<string,any>=import.meta.glob(["./modules/*.ts"],{
    eager:true
});

// console.log(modules);

const routes:Array<RouteRecordRaw>=[];

Object.keys(modules).forEach((key)=>{
    // console.log(modules[key]);
    const module=modules[key].default;
    routes.push(module);
})

routes.push(homeRouter);
routes.push(aboutRouter);


const router=createRouter({
    history:createWebHistory(),
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