const productList = [
  {
    id: "1",
    title: "Product one",
    price: 99,
    image: "/images/airpods.jpg",
  },
  {
    id: "2",
    title: "Product two",
    price: 99,
    image: "/images/headphone.jpg",
  },
  {
    id: "3",
    title: "Product three",
    price: 99,
    image: "/images/ipad.jpg",
  },
  {
    id: "4",
    title: "Product four",
    price: 99,
    image: "/images/mic.jpg",
  },
];

function getProductData(id) {
  return productList.find((product) => product.id === id);
}

export { productList, getProductData };
