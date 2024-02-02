// typing animation
// let typed = new Typed(".typing", {
//   Strings: [" ", "Web Designer", "Web Developer", "Software Engineer"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });

const navMenuBtn = document.querySelector(".menu-btn");
const MenuItems = document.querySelector(".aside");
navMenuBtn.addEventListener("click", () => {
  MenuItems.classList.toggle("show");
});

const navMenu = document.querySelectorAll(".navMenus");
navMenu.forEach((link) => {
  link.addEventListener("click", () => {
    MenuItems.classList.remove("show");
  });
});
