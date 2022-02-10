var hamburger = document.querySelector("#bar"); //seleting hamburger menu
var menu = document.querySelector("nav"); //selcting navigation menu

//Adding event listener on hamburger menu
hamburger.addEventListener("click", function () {
    menu.classList.toggle("active"); //adding new class in navigation menu when we click on hamburger menu

    // hamburger.classList.toggle("animation");

    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-times");
})