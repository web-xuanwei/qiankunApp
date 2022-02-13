import Vue from "vue"
import Antd from 'ant-design-vue';
import App from "./App.vue"
import router from "./router"
import 'ant-design-vue/dist/antd.css';

import startQiankun from './micro/index.js';

Vue.config.productionTip = false

Vue.use(Antd);

Vue.prototype.$startQiankun = startQiankun;

let app = null;

/**
 * 渲染函数
 * appContent 子应用html内容
 * loading 子应用加载效果，可选
 */
function render({ appContent, loading } = {}) {
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      data() {
        return {
          content: appContent,
          loading
        };
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading
          }
        });
      }
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true });
}

initApp();

// startQiankun();