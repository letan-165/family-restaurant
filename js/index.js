const dishes = [
  { name: "Bún nước bò tôm", price: "35.000đ", img: "/public/food-bun.png" },
  { name: "Bún nước đặc biệt", price: "50.000đ", img: "/public/food-bun.png" },
  { name: "Mì trộn bò tôm", price: "35.000đ", img: "/public/food-mi.png" },
  { name: "Mì trộn đặc biệt", price: "50.000đ", img: "/public/food-mi.png" }
];

const menuList = document.getElementById("menu-list");

menuList.innerHTML = dishes.map(dish => `
  <div class="dish">
    <div class="dish-img" style="background-image: url('${dish.img}')"></div>
    <p>${dish.name}</p>
    <span>${dish.price}</span>
  </div>
`).join("");
