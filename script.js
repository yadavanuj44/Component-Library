const menuIconBtn = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector("[data-sidebar]")

menuIconBtn.addEventListener("click", () => (
    sidebar.classList.toggle("open")
))