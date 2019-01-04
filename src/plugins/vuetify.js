import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  icons: {
    'cancel': 'fas fa-ban',
    'menu': 'fas fa-ellipsis-v'
  }
})
