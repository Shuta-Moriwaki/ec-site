import Vue from 'vue';
import './plugins/bootstrap-vue';
import firebase from 'firebase/app';
import App from './App.vue';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: 'e',
  messagingSenderId: '',
  appId: '',
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
