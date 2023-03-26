import { createApp } from "vue";
import * as VueRouter from "vue-router";
import {
  provideVSCodeDesignSystem, vsCodeButton
} from "@vscode/webview-ui-toolkit";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Projects from "./views/project/index.vue";

provideVSCodeDesignSystem().register(
  vsCodeButton()
);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/projects', component: Projects },
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = createApp(App);
app.use(router);
app.mount("#app");
