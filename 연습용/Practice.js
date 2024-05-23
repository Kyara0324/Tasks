const products = [
  { id: 1, brand: "아디다스", name: "멋진 아디다스 반팔티", price: 32000 },
  { id: 2, brand: "나이키", name: "멋진 나이키 바지", price: 30000 },
];

localStorage.setItem("products", JSON.stringify(products));

const newProduct = {
  id: 3,
  brand: "뉴발",
  name: "멋진 뉴발 신발",
  price: 78000,
};

localStorage.getItem("products");
let 상품리스트 = JSON.parse(localStorage.getItem("products"));
localStorage.setItem("products", JSON.stringify(products));
