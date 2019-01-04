// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyA0-6jCA67Mn-KmxkT-HE7SDTwPfzgOeww',
  authDomain: 'test-vue-45fe9.firebaseapp.com',
  databaseURL: 'https://test-vue-45fe9.firebaseio.com',
  projectId: 'test-vue-45fe9',
  storageBucket: 'test-vue-45fe9.appspot.com',
  messagingSenderId: '623948826743'
}
firebase.initializeApp(config)

let app

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
