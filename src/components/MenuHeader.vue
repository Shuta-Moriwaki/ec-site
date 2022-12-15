<template>
  <b-container>
    <b-row>
      <b-col>
        <h1><slot></slot></h1>
        <div class="d-flex justify-content-end">
          <b-button
            class="ml-3"
            variant="danger"
            type="button"
            @click="onClickLogOut"
          >
            ログアウト
          </b-button>
          <b-button class="ml-3">新規会員登録</b-button>
          <b-button class="ml-3">会員情報修正</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  BButton,
  BCol,
  BContainer,
  BRow,
} from 'bootstrap-vue';
import firebase from 'firebase/app';

export default {
  components: {
    BButton,
    BCol,
    BContainer,
    BRow,
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
