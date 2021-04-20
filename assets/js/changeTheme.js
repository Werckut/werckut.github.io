let themeSwitchButton = document.getElementById("switchThemeButton");

themeSwitchButton.onclick = () => {
    let theme = document.getElementById("themeType");
    if (theme.getAttribute("href") == "../assets/styles/css/themes/light-theme.css") {
        theme.href = "../assets/styles/css/themes/dark-theme.css";
        themeSwitchButton.innerHTML = "Светлая тема";
    }
    else {
        theme.href = "../assets/styles/css/themes/light-theme.css"
        themeSwitchButton.innerHTML = "Тёмная тема";
    }
}