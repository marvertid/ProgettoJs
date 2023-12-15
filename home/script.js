let titleText = document.getElementsByClassName("titleText");
let h1 = document.getElementById("title");
let active = false;

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}



h1.onmouseover = async function() {
    let random;
    if (!active) {
        active = true;
        for (let i = 0; i < 6; i++) {
            titleText[i].classList.add("flip");
                random = 1 + Math.floor(4 * Math.random());
                console.log(random);
                await delay(285);
                switch(random) {
                    case 1:
                    case 2:
                        titleText[i].style.backgroundColor = "#3a3a3c";
                        break;
                    case 3:
                        titleText[i].style.backgroundColor = "#b59f3b";
                        break;
                    case 4:
                        titleText[i].style.backgroundColor = "#538d4e";
                }
            await delay(15);
        }
        for (let i = 0; i < 6; i++) {
            titleText[i].classList.remove("flip");
    }
        await delay(1000);
        active = false;
    }
       



        
}



// --------------------------------------------------------------------------------------------

