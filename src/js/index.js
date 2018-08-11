import "../scss/main.scss";

const menuIcon = document.querySelector(".fa-bars");
const body = document.querySelector("body");
menuIcon.addEventListener("click", () => {
  body.addClassItem("menu-active");
  console.log("hi");
});
