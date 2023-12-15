let titleText = document.getElementsByClassName("titleText");
let h1 = document.getElementById("title");
let flag;


h1.onmouseover = function() {
    for (let i = 0; i < 6; i++) {
        titleText[i].style.backgroundColor = "#1e1e20"
    }
}
// --------------------------------------------------------------------------------------------

