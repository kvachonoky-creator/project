const burger = document.querySelector(".burger-menu");
const burger_wrap = document.querySelector(".burger_menu_wrap");
const header = document.querySelector("header");

let burger_menu = false

burger.addEventListener("click", () => {
    if (burger_menu === false) {
        burger_wrap.style.transform = "translateY(120px)";
        burger.setAttribute("src", "./assets/img/X.svg");
        burger_wrap.style.transition = "transform 1.2s";
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.backgroundColor = "#191919";
        header.style.zIndex = "999";
        burger_menu = true;
    } else if (burger_menu) {
        burger_wrap.style.transform = "translateY(-100%)";
        burger.setAttribute("src", "./assets/img/iconamoon_menu-burger-horizontal-light.svg");
        burger_wrap.style.transition = "transform 1.2s";
        burger_menu = false;
        header.style.position = "static";
    }

})

burger_wrap.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-link")) {
        burger_wrap.style.transform = "translateY(-100%)";
        burger_wrap.style.transition = "transform 1.2s";
        burger.setAttribute("src", "./assets/img/iconamoon_menu-burger-horizontal-light.svg");
        header.style.position = "static";
    }
})