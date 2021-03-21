let themeSwitchButton = document.getElementById("switchThemeButton");

themeSwitchButton.onclick = () => {
    let theme = document.getElementById("themeType");
    if (theme.getAttribute("href") == "../assets/style/css/themes/light-theme.css") {
        theme.href = "../assets/style/css/themes/dark-theme.css";
        themeSwitchButton.innerHTML = "Светлая тема";
    }
    else {
        theme.href = "../assets/style/css/themes/light-theme.css"
        themeSwitchButton.innerHTML = "Тёмная тема";
    }
}