const menuItems = [
  { name: "Cơm sườn", price: 50000, img: "/public/food.png" },
  { name: "Bún thịt nướng", price: 45000, img: "/public/food.png" },
  { name: "Phở bò", price: 60000, img: "/public/food.png" },
  { name: "Hủ tiếu Nam Vang", price: 55000, img: "/public/food.png" }
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

const menuList2 = document.getElementById("menu-list-2");

menuList2.innerHTML = menuItems.map(item => `
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