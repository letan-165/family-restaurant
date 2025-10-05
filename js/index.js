const dishes = [
  { name: "Phở bò tái chín", price: "50.000đ", img: "/public/food.png" },
  { name: "Cơm gà xối mỡ", price: "45.000đ", img: "/public/food.png" },
  { name: "Bún thịt nướng", price: "40.000đ", img: "/public/food.png" },
  { name: "Hủ tiếu Nam Vang", price: "55.000đ", img: "/public/food.png" }
];

const menuList = document.getElementById("menu-list");

menuList.innerHTML = dishes.map(dish => `
  <div class="dish">
    <div class="dish-img" style="background-image: url('${dish.img}')"></div>
    <p>${dish.name}</p>
    <span>${dish.price}</span>
  </div>
`).join("");
