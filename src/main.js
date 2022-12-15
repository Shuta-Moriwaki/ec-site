import Vue from 'vue';
import './plugins/bootstrap-vue';
import firebase from 'firebase/app';
import App from './App.vue';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyBVNgTsWCuaVqWJOtkJou1CixKI_TfWfD4',
  authDomain: 'ec-site-a04cd.firebaseapp.com',
  projectId: 'ec-site-a04cd',
  storageBucket: 'ec-site-a04cd.appspot.com',
  messagingSenderId: '1074369728825',
  appId: '1:1074369728825:web:9876bf08a7d8e7f6dc58e8',
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
