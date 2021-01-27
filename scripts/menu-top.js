let menu = document.getElementById('menu-top');
let showMenuBtn = document.getElementById('showMenu-btn');

showMenuBtn.onclick = function() {
    if (menu.style.display == 'block') {
        menu.style.display = "none";
    }
    else {
        menu.style.display = 'block';
    }
};