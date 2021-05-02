import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDMQ0D1LtMl_E9bd0VP_8MfY-0Wkg_564o',
  authDomain: 'contacts-app-df8cb.firebaseapp.com',
  databaseURL: 'https://contacts-app-df8cb-default-rtdb.firebaseio.com',
  projectId: 'contacts-app-df8cb',
  storageBucket: 'contacts-app-df8cb.appspot.com',
  messagingSenderId: '626481869046',
  appId: '1:626481869046:web:21ad4dc86c61469dac7cd7',
  measurementId: 'G-ZR0NQD837J',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.database()
export const auth = firebase.auth()

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
