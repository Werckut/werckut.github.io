let themeSwitchButton = document.getElementById("switchThemeButton");

themeSwitchButton.onclick = function() {
    let theme = document.getElementById("themeMode");
    if (theme.getAttribute("href") == "styles/light-theme.css") {
        theme.href = "styles/dark-theme.css";
        themeSwitchButton.innerHTML = "Светлая тема";
    }
    else {
        theme.href = "styles/light-theme.css"
        themeSwitchButton.innerHTML = "Тёмная тема";
    }
}