import { createApp } from "vue";
import * as VueRouter from "vue-router";
import {
  provideVSCodeDesignSystem, vsCodeButton
} from "@vscode/webview-ui-toolkit";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Devices from "./views/device/index.vue";
import Projects from "./views/project/index.vue";
import Terminals from "./views/terminal/index.vue";

import OpenCmakeProject from "./views/project/cmake/Open.vue";
import NewMmlTerminal from "./views/terminal/mml/New.vue";

provideVSCodeDesignSystem().register(
  vsCodeButton()
);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/devices', component: Devices },
  { path: '/projects', component: Projects },
  { path: '/projects/cmake/open', component: OpenCmakeProject },
  { path: '/terminals', component: Terminals },
  { path: '/terminals/mml/new', component: NewMmlTerminal },
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = createApp(App);
app.use(router);
app.mount("#app");
