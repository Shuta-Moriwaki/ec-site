<template>
  <b-container fluid="sm">
    <b-row class="justify-content-center">
      <b-col
        class="my-3"
        cols="12"
        md="8"
        lg="6"
      >
        <h1>ログインメニュー</h1>
        <b-form>
          <b-form-group class="mb-4">
            <label for="userMail">メールアドレス</label>
            <b-form-input
              id="userMail"
              v-model="userMail"
              required
              type="email"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="userPass">パスワード</label>
            <b-form-input
              id="userPass"
              v-model="userPass"
              required
              type="password"
            >
            </b-form-input>
          </b-form-group>
          <b-alert
            class="mt-4"
            variant="danger"
            :show="hasError"
          >
            ログインに失敗しました。
          </b-alert>
          <b-button
            variant="success"
            type="button"
            @click="onClickLogIn"
          >
            ログイン
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  BAlert,
  BButton,
  BContainer,
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
} from 'bootstrap-vue';
import firebase from 'firebase/app';

export default {
  components: {
    BAlert,
    BButton,
    BContainer,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
  },
  data() {
    return {
      userMail: '',
      userPass: '',
      hasError: false,
    };
  },
  methods: {
    onClickLogIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userMail, this.userPass)
        .then(() => {
          // ログイン成功
          console.log('ログイン成功');
          this.hasError = false;
        })
        .catch((error) => {
          // ログイン失敗
          console.error('ログインエラー', error);
          this.hasError = true;
        });
    },
  },
};
</script>
