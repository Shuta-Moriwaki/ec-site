<template>
  <b-container>
    <b-row>
      <b-col>
        <menu-header>ユーザーメニュー</menu-header><br>
        <items-list :items="items" :cart="cart"></items-list>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
} from 'bootstrap-vue';
import firebase from 'firebase/app';
import ItemsList from '@/components/ItemsList.vue';
import MenuHeader from '@/components/MenuHeader.vue';
import { getItems, getCart } from '@/servicies/firebaseService';

export default {
  components: {
    BContainer,
    BRow,
    BCol,
    ItemsList,
    MenuHeader,
  },

  data() {
    return {
      items: [],
      cart: [],
    };
  },

  async created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.onGetItems();
        this.onGetCart();
      }
    });
  },
  methods: {
    async onGetItems() {
      this.items = await getItems()
        .catch((err) => {
          console.error(err.message);
        });
    },
    async onGetCart() {
      this.cart = await getCart()
        .catch((err) => {
          console.error(err.message);
        });
    },
  },
};
</script>
