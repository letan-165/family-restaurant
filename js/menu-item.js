const menuItems = [
  { name: "Bún nước Bò Tôm", price: 35000, img: "/public/food-bun.png" },
  { name: "Bún nước Đặc Biệt", price: 50000, img: "/public/food-bun.png" },
  { name: "Mì trộn Bò Tôm", price: 35000, img: "/public/food-mi.png" },
  { name: "Mì trộn Đặc Biệt", price: 50000, img: "/public/food-mi.png" }
];

const menuList = document.getElementById("menu-list");

menuList.innerHTML = menuItems.map(item => `
  <div class="col-6 col-md-3">
    <div class="card text-center dish border-2 p-1">
      <img src="${item.img}" class="card-img-top rounded-3" alt="${item.name}">
      <div class="card-body p-2">
        <p class="fw-bold">${item.name}</p>
        <p class="dish-price mb-2">${item.price.toLocaleString("vi-VN")}đ</p>
        <div class="dish-actions d-flex justify-content-center align-items-center gap-2">
          <button class="btn btn-sm btn-dark rounded-circle">-</button>
          <span>0</span>
          <button class="btn btn-sm btn-dark rounded-circle">+</button>
        </div>
      </div>
    </div>
  </div>
`).join("");

// Món thêm
const menuItems2 = [
  { name: "Thêm trứng", price: 5000, img: "/public/food-trung.png" },
  { name: "Thêm bò viên", price: 5000, img: "/public/food-bovien.png" },
  { name: "Thêm chả", price: 5000, img: "/public/food-cha.png" },
  { name: "Thêm mì", price: 10000, img: "/public/food-mithem.png" }
];

const menuList2 = document.getElementById("menu-list-2");

menuList2.innerHTML = menuItems2.map(item => `
  <div class="col-6 col-md-3">
    <div class="card text-center dish border-2 p-1">
      <img src="${item.img}" class="card-img-top rounded-3" alt="${item.name}">
      <div class="card-body p-2">
        <p class="fw-bold">${item.name}</p>
        <p class="dish-price mb-2">${item.price.toLocaleString("vi-VN")}đ</p>
        <div class="dish-actions d-flex justify-content-center align-items-center gap-2">
          <button class="btn btn-sm btn-dark rounded-circle">-</button>
          <span>0</span>
          <button class="btn btn-sm btn-dark rounded-circle">+</button>
        </div>
      </div>
    </div>
  </div>
`).join("");
