import './micro/public-path';
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import routes from './router';
import VueRouter from 'vue-router'
import actions from './micro/actions'

Vue.config.productionTip = false

let router = null;
let instance = null;

function render(props = {}) {
  if(props){
    actions.setActions(props);
    actions.onGlobalStateChange(state => {
      console.log(state)
    })
  }
  
  const { container } = props;
  
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 挂载前
export async function bootstrap(props = {}) {
  console.log('从父应用继承的数据',props);

  Array.isArray(props.fns) && props.fns.map(i => {
    Vue.prototype[i.name] = i[i.name]
  });
}

// 挂载后
export async function mount(props) {
  render(props);
}

// 卸载后
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}