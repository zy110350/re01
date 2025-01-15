export default {
    path:"/home",
    name:"home",
    component:()=>import("@/views/home/components/index.vue"),
    meta:{},
    children:[]
}
//路径要用@，用..报错