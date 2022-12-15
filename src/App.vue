<template>
  <div v-if="currentEmail == userEmail">
    <div id="app">
      <user-menu></user-menu>
  <!--  <menu-header>ユーザメニュー</menu-header>-->
    <!--<user-menu></user-menu>-->
    </div>
  </div>
  <div v-else>
    <div id ="app">
      <login></login>
      <!--<user-menu></user-menu>-->
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
// import ManagerMenu from '@/components/ManagerMenu.vue';
import UserMenu from '@/components/UserMenu.vue';
// import MenuHeader from '@/components/MenuHeader.vue';
import firebase from 'firebase/app';

export default {
  components: {
    Login,
    // ManagerMenu,
    UserMenu,
    // MenuHeader,
  },
  data() {
    return {
      currentEmail: null,
      userEmail: 'user@example.com',
    };
  },

  async created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('状態：ログイン中');
        this.currentEmail = user.email;
      } else {
        console.log('状態：ログアウト');
        this.currentEmail = null;
      }
    });
  },
};
</script>

<style>
</style>
