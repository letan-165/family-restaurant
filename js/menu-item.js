const menuItems = [
  { name: "Bún nước bò tôm", price: 35000, img: "/public/food-bun.png" },
  { name: "Bún nước đặc biệt", price: 50000, img: "/public/food-bun.png" },
  { name: "Mì trộn bò tôm", price: 35000, img: "/public/food-mi.png" },
  { name: "Mì trộn đặc biệt", price: 50000, img: "/public/food-mi.png" }
];

const menuList = document.getElementById("menu-list");

menuList.innerHTML = menuItems.map(item => `
  <div class="dish">
    <div class="dish-img" style="background-image: url('${item.img}')"></div>
    <p class="dish-name">${item.name}</p>
    <p class="dish-price">${item.price.toLocaleString("vi-VN")}đ</p>
    <div class="dish-actions">
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  </div>
`).join("");

const menuItems2 = [
  { name: "Thêm trứng", price: 5000, img: "/public/food-trung.png" },
  { name: "Thêm bò viên", price: 5000, img: "/public/food-bovien.png" },
  { name: "Thêm chả", price: 5000, img: "/public/food-cha.png" },
  { name: "Thêm mì", price: 10000, img: "/public/food-mithem.png" }
];

const menuList2 = document.getElementById("menu-list-2");

menuList2.innerHTML = menuItems2.map(item => `
  <div class="dish">
    <div class="dish-img" style="background-image: url('${item.img}')"></div>
    <p class="dish-name">${item.name}</p>
    <p class="dish-price">${item.price.toLocaleString("vi-VN")}đ</p>
    <div class="dish-actions">
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  </div>
`).join("");