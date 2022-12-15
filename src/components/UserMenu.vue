<template>
  <b-container>
    <b-row>
      <b-col>
        <menu-header>ユーザーメニュー</menu-header><br>
        <items-list :items="items"></items-list>
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
import { getItems } from '@/servicies/firebaseService';

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
    };
  },

  async created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.onGetItems();
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
  },
};
</script>
