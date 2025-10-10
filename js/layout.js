document.addEventListener("DOMContentLoaded", () => {
  const currentPageSpan = document.getElementById("current-page");
  const links = document.querySelectorAll(".navbar-nav .nav-link");

  // Lấy link hiện tại
  let currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add("active");
      currentPageSpan.textContent = link.dataset.title;
    } else {
      link.classList.remove("active");
    }
  });
});