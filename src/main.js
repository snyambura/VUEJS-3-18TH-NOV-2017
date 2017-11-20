import Vue from 'vue'
import App from './App.vue'

Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
        // Focus the element
        el.focus()
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
