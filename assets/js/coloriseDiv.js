let divs = document.getElementsByClassName("colorise");

document.write(divs[0].classList);
divs.forEach(div => {
    div.style.color = "red";
});