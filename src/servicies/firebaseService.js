import firebase from 'firebase/app';

// 商品(items)一覧
export const getItems = async () => {
  const itemsInfo = await firebase
    .firestore()
    .collection('items')
    .where('stock', '==', 'onSale');
  const items = [];

  itemsInfo.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        console.log(change.type);
        items.push({
          id: change.doc.id,
          name: change.doc.data().name,
          type: change.doc.data().type,
          price: change.doc.data().price,
          stock: change.doc.data().stock,
        });
        console.log(items);
      }
      if (change.type === 'removed') {
        // console.log(change.type);
        // console.log(items.indexOf);
        // console.log(change.doc.data().stock);
        // console.log(change.doc.id);
        // change.typeがremovedになったitems配列のインデックスを取得
        const index = items.findIndex(({ id }) => id === change.doc.id);
        // console.log(index);
        // items配列からそのインデックスを削除
        items.splice(index, 1);
      }
    });
  });
  return items;
};

// 買い物かごへデータ送信
export const postItem = async (id, name, price, type, stock) => {
  let addItem = null;
  const itemId = id;
  const itemName = name;
  const itemPrice = price;
  const itemType = type;
  const itemStock = stock;

  const itemData = {
    itemId,
    itemName,
    itemPrice,
    itemType,
    itemStock: 'soldOut',
  };

  const docRef = firebase
    .firestore()
    .collection('cart')
    .doc();
  docRef.set(itemData);
  addItem = {
    id: itemId,
    name: itemName,
    price: itemPrice,
    type: itemType,
    stock: itemStock,
  };

  // 買い物かごへ入れた商品のstockをsoldOutにする
  await firebase
    .firestore()
    .collection('items')
    .doc(id)
    .update({
      stock: 'soldOut',
    });
  return addItem;
};

// カートのデータを取得
export const getCart = async () => {
  const cartInfo = await firebase
    .firestore()
    .collection('cart');
  const cart = [];

  cartInfo.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        cart.push({
          id: change.doc.id,
          itemId: change.doc.data().itemId,
          itemName: change.doc.data().itemName,
          itemType: change.doc.data().itemType,
          itemPrice: change.doc.data().itemPrice,
          itemStock: change.doc.data().itemStock,
        });
      }
      console.log(cart);
      if (change.type === 'removed') {
        const index = cart.findIndex(({ id }) => id === change.doc.id);
        cart.splice(index, 1);
      }
    });
  });
  return cart;
};

// カート商品の削除機能
export const deleteItem = async (id, itemId) => {
  await firebase
    .firestore()
    .collection('cart')
    .doc(id)
    .delete();
  await firebase
    .firestore()
    .collection('items')
    .doc(itemId)
    .update({
      stock: 'onSale',
    });
};
