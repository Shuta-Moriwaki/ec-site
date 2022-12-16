<template>
  <b-container class="items">
    <h3 class="ml-3">商品一覧</h3>
    <!--商品検索機能-->
    <b-form @submit.prevent="onSearchItems">
          <b-form-group class="mb-2">
            <b-form-input
              type="text"
              v-model="keyword"
              label="検索"
              placeholder="検索ワードを入力して下さい"
            ></b-form-input>
          <b-button
            block
            type="submit"
            variant="outline-success"
          >
            検索
          </b-button>
          </b-form-group>
        </b-form>
    <!--検索した場合非表示にする-->
    <b-row v-if="this.searchItems.length === 0">
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
              variant="outline-success"
            >
              買い物かごに入れる
            </b-button>
          </b-modal>
        </b-card>
      </b-col>
    </b-row>
    <!--検索した場合表示する-->
    <b-row v-else>
      <b-col
        v-for="{
          id,
          name,
          price,
        } in searchItems"
        :key="id"
        class="my-3"
        cols="6"
        md="4"
        lg="3"
      >
        <b-card
          class="item_searchItems"
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
              variant="outline-success"
            >
              買い物かごに入れる
            </b-button>
          </b-modal>
        </b-card>
      </b-col>
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
  // BCardText,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
} from 'bootstrap-vue';

export default {
  components: {
    BButton,
    BContainer,
    BRow,
    BCol,
    BCard,
    // BCardText,
    BModal,
    BForm,
    BFormGroup,
    BFormInput,
  },

  data() {
    return {
      keyword: '',
      searchItems: [],
    };
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  methods: {
    makeToast(title, msg) {
      this.$bvToast.toast(msg, {
        autoHideDelay: 5000,
        title,
        variant: 'danger',
      });
    },

    async onSearchItems() {
      // searchItemsの初期化
      this.searchItems = [];
      console.log(this.searchItems);
      for (let i = 0; i < this.items.length; i += 1) {
        const item = this.items[i];
        // keywordに該当するitemsのname属性を検索
        if (item.name.indexOf(this.keyword) !== -1) {
          console.log('見つかりました。');
          this.searchItems.push(item);
        }
      }
      return this.searchItems;
    },
  },
};
</script>
<style scoped>
.card-body {
  padding: .75rem;
  background-color: #fafafa;
}

.card-title {
  margin-top: .25rem;
  font-size: 1rem;
  text-align: center;
  overflow: hidden;
}
</style>
