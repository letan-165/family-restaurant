const dishes = [
  { name: "Bún nước bò tôm", price: "35.000đ", img: "/public/food-bun.png" },
  { name: "Bún nước đặc biệt", price: "50.000đ", img: "/public/food-bun.png" },
  { name: "Mì trộn bò tôm", price: "35.000đ", img: "/public/food-mi.png" },
  { name: "Mì trộn đặc biệt", price: "50.000đ", img: "/public/food-mi.png" }
];

const menuList = document.getElementById("menu-list");

menuList.innerHTML = dishes.map(dish => `
  <div class="col-6 col-md-3">
    <div class="card shadow-sm border-0">
      <img src="${dish.img}" class="card-img-top" alt="${dish.name}">
      <div class="card-body">
        <h6 class="card-title">${dish.name}</h6>
        <p class="card-text fw-bold">${dish.price}</p>
      </div>
    </div>
  </div>
`).join("");
