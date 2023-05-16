// Show Menu in Mobile [Header]
let menuBtn = document.querySelector(".header .toglle-menu");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("active-menu");
};

document.querySelectorAll(".header .nav li a").forEach((e) => {
  e.onclick = () => {
    menuBtn.classList.remove("active-menu");
  };
});

// Start Show Box content [Services]
let servicesBox = document.querySelectorAll(".services .boxs .box");

servicesBox.forEach((e) => {
  e.onclick = () => {
    e.classList.toggle("active-box");
  };
});
