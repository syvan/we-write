import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Select } from "element-ui"
import service from "./utils/https"
import urls from "./utils/urls"

Vue.config.productionTip = false;

Vue.use(Button);
Vue.component(Select.name,Select);

Vue.prototype.$https = service;
Vue.prototype.$urls = urls;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
