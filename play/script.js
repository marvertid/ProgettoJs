let word;
let test = document.getElementById("test");
let i = 0;

/*window.addEventListener(
    "keydown",
    (event) => {
        switch (event.code) {
        case "ArrowDown":
          // Do something for "down arrow" key press.
          break;
        case "ArrowUp":
          // Do something for "up arrow" key press.
          break;
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          break;
        case "ArrowRight":
          // Do something for "right arrow" key press.
          break;
        case "Enter":
          // Do something for "enter" or "return" key press.
          break;
        case " ":
          // Do something for "space" key press.
          break;
        case "Escape":
          // Do something for "esc" key press.
          break;
        case "Backspace":
            test.textContent = word.substr(i);
          break;
        default:
          test.textContent = word += event.key;
          i++;
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true,
);


