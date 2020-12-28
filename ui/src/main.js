import Vue from 'vue'
import CustomCollapse from './CustomCollapse';
import Search from "./Search";
import GoToTop from './GoToTop';
import ScrollProgression from "./ScrollProgression";
import EstimatedReadTime from "./EstimatedReadTime";
Vue.config.productionTip = false

new Vue({
  render: h => h(Search),
}).$mount('#search-container')

new Vue({
  render: h => h(GoToTop),
}).$mount('#go-to-top-container')

new Vue({
  render: h => h(CustomCollapse),
}).$mount('#custom-collapse-container')

new Vue({
  render: h => h(ScrollProgression),
}).$mount('#scroll-progression-container')

new Vue({
  render: h => h(EstimatedReadTime),
}).$mount('#estimated-read-time-container')