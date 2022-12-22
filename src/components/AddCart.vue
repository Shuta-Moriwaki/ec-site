<template>
  <b-button
    class="mt-3"
    block
    variant="outline-success"
    @click.prevent="onSubmit"
  >
    買い物かごに入れる
  </b-button>
</template>
<script>
import {
  BButton,
} from 'bootstrap-vue';
import { postItem } from '@/servicies/firebaseService';

export default {
  components: {
    BButton,
  },

  props: ['id', 'name', 'type', 'price', 'stock'],

  methods: {
    async onSubmit() {
      let response = null;
      await postItem(
        this.id,
        this.name,
        this.price,
        this.type,
        this.stock,
      )
        .then((data) => {
          response = data;

          // TODO: カスタムイベントの発行
          const {
            name,
            price,
            type,
            stock,
          } = response;
          this.$emit('add-cart', {
            name,
            price,
            type,
            stock,
          });
          this.hideModal();
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    hideModal() {
      this.$bvModal.hide(this.id);
    },
  },
};
</script>
