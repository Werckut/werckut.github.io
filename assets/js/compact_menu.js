let parent = document.getElementById("header__nav");
let menu = document.getElementById("header__compact_menu");
let menuButton = document.getElementById("options__compact_menu_button")
let display = menu.style.display;

window.onload = () => {
    menu.style.display = "none";
    menu.innerHTML = parent.innerHTML;
}

menuButton.onclick = () => {
    menu.style.display = (menu.style.display == "none") ? display : "none";
    menu.style.top = document.getElementById("main_header").offsetHeight + "px";
}