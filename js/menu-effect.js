document.addEventListener("DOMContentLoaded", () => {
  const dishes = document.querySelectorAll(".dish");
  const totalDisplay = document.querySelector(".cart-box span");

  function updateTotal() {
    let total = 0;
    dishes.forEach(dish => {
      const qty = parseInt(dish.querySelector(".dish-actions span").textContent);
      const priceText = dish.querySelector(".dish-price").textContent.replace(/[^\d]/g, "");
      total += qty * parseInt(priceText);
    });
    totalDisplay.textContent = total.toLocaleString("vi-VN") + "đ";
  }

  dishes.forEach(dish => {
    const minusBtn = dish.querySelector("button:first-child");
    const plusBtn = dish.querySelector("button:last-child");
    const qtySpan = dish.querySelector(".dish-actions span");

    plusBtn.addEventListener("click", () => {
      let value = parseInt(qtySpan.textContent);
      qtySpan.textContent = value + 1;
      dish.classList.add("active");
      updateTotal();
    });

    minusBtn.addEventListener("click", () => {
      let value = parseInt(qtySpan.textContent);
      if (value > 0) {
        qtySpan.textContent = value - 1;
        if (value - 1 === 0) dish.classList.remove("active");
        updateTotal();
      }
    });
  });
});
