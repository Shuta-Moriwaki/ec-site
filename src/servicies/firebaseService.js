import firebase from 'firebase/app';

// 商品(items)一覧
export const getItems = async () => {
  const itemsInfo = await firebase
    .firestore()
    .collection('items')
    .orderBy('name')
    .get();
  const { docs } = itemsInfo;

  const items = [];
  console.log(items);
  for (let i = 0; i < docs.length; i += 1) {
    const doc = docs[i];
    items.push({
      id: doc.id,
      name: doc.data().name,
      type: doc.data().type,
      price: doc.data().price,
    });
  }
  return items;
};

export const delteItem = async () => {
};
