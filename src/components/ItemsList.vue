<template>
  <b-container class="items">
    <h3 class="ml-3">商品一覧</h3>
    <b-row>
      <b-col
        v-for="{
          id,
          name,
          type,
          price,
        } in items"
        :key="id"
        class="my-3"
        cols="6"
        md="4"
        lg="3"
      >
        <b-card
          class="item_items"
          :title="name"
          :sub-title="'￥'+price"
        >
          <b-button
            id="id"
            @click="$bvModal.show(id)"
            variant="outline-success"
          >
            詳細
          </b-button>
          <b-modal :id="id" hide-footer>
            <template #modal-title>
              <h3>{{ name }}</h3>
            </template>
            <h5>￥{{ price }}</h5>
            <b-button
              class="mt-3"
              block
            >
              買い物かごに入れる
            </b-button>
          </b-modal>
        </b-card>
      </b-col>
        <!--商品検索機能-->
        <div class="serch_item">
        </div>
        <!--お買い物カゴ設置(その後購入画面)-->
    </b-row>
  </b-container>
</template>

<script>
import {
  BButton,
  BContainer,
  BRow,
  BCol,
  BCard,
  BModal,
} from 'bootstrap-vue';

export default {
  components: {
    BButton,
    BContainer,
    BRow,
    BCol,
    BCard,
    BModal,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.item_items .card-body {
  padding: .75rem;
  background-color: #fafafa;
}

.item_items .card-title {
  margin-top: .25rem;
  font-size: 1rem;
  text-align: center;
  overflow: hidden;
}
</style>
