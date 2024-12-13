import {createApp} from "vue";
import App from "./App.vue";
console.log(App);
import "./styles/reset.css";
import router from "./router";
const app=createApp(App);
app.mount("#app");
app.use(router);
