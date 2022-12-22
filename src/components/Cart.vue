<template>
  <div>
    <b-button
      variant="success"
      v-b-modal.goto-cart
    >
      <b-icon-cart></b-icon-cart>
    </b-button>
    <b-modal id='goto-cart' class="overflow-auto">
      <div v-if="cart.length === 0">
        <p class="text-center">現在カートに商品はありません。</p>
      </div>
      <b-list-group class="overflow-auto">
        <b-list-group-item
           v-for="{
              id,
              itemId,
              itemName,
              itemType,
              itemPrice,
            } in cart"
            :key="id"
            cols="3"
        >
          <div class="d-flex">
            <div class="col-6">
              <h5>
                {{ itemName }}
              </h5>
              <p>
                ￥{{ itemPrice }}
              </p>
              <p>
                カテゴリー：{{ itemType }}
              </p>
            </div>
            <b-button
              variant="link"
              class="col-6"
              @click.prevent="$emit('delete-item', id, itemId)"
            >
              <b-icon-trash variant="danger"></b-icon-trash>
            </b-button>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton,
  BModal,
  VBModal,
  BListGroup,
  BListGroupItem,
  BIconTrash,
  BIconCart,
} from 'bootstrap-vue';

export default {
  components: {
    BButton,
    BModal,
    BListGroup,
    BListGroupItem,
    BIconTrash,
    BIconCart,
  },
  directives: {
    'b-modal': VBModal,
  },
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
.list-group {
  height: 300px;
  font-size: 1rem;
}
</style>
