import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let instance = null;
function render() {
  instance = new Vue({
    render: h => h(App),
  }).$mount('#app');
}

if (window.__POWERED_BY_QIANKUN__) {
  /* eslint-disable-next-line */
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 应用加载之前
export async function bootstrap(props) {
  console.log('vue bootstrap', props);
}
// 应用 render 之前触发
export async function mount(props) {
  console.log('vue mount', props);
  render();
}
// 应用卸载之后触发
export async function unmount(props) {
  console.log('vue unmount', props);
  instance.$destroy();
}