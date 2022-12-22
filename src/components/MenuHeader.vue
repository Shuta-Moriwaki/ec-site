<template>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="#"><slot></slot></b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon-chevron-bar-up v-if="expanded"></b-icon-chevron-bar-up>
        <b-icon-person-circle v-else></b-icon-person-circle>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto d-flex justify-content-end">
        <b-nav-item >
          <b-button
            variant="outline-success"
            size="sm"
          >
            新規会員登録
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button
            variant="outline-success"
            size="sm"
          >
            会員情報修正
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button
            variant="outline-danger"
            size="sm"
            type="button"
            @click="onClickLogOut"
          >
            ログアウト
          </b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BButton,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BIconPersonCircle,
  BIconChevronBarUp,
} from 'bootstrap-vue';
import firebase from 'firebase/app';

export default {
  components: {
    BButton,
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BIconPersonCircle,
    BIconChevronBarUp,
  },

  methods: {
    onClickLogOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('ログアウトしました');
        })
        .catch((error) => {
          console.log('ログアウトエラー', error);
        });
    },
  },
};
</script>
