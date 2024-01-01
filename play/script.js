import { engDictionary, itDictionary } from "../wordsDB/dictionary.js";

var test = document.getElementById("test");
let tableTd = document.getElementsByTagName("td");
var wordTest = document.getElementById("word");
var language = document.documentElement.lang;
let i;
let j;
let word = "";

i = 0;
j = 0;
word = pickWord();

//wordTest.textContent += word;

document.body.onkeydown = (e) => {
  const key = e.key;

  if (key === "Backspace" && i > 0) {
    let temp = test.textContent;
    temp = temp.slice(0, -1);
    test.textContent = temp;
    tableTd[i - 1 + j].textContent = " ";
    i--;
  } else if (key === "Enter") {
    if (checkWord(test.textContent)) {

      if (test.textContent === word) {
        alert("you won");
        location.reload()

      } else {

        checkForLetter(word, tableTd, j);
        
        j += 5;
        i = 0;
        test.textContent = "";
      }
    } 
  } else if (key == "F1") {
    test.textContent = "";
    i = 0;
    j = 0;
  } else if (isLetter(key)) {
      if (i < 5) {
        test.textContent += key.toLowerCase();
        tableTd[i + j].textContent = key;
        i++;
      }
  }
};

function isLetter(key) {
  if (key.length == 1 && ((key >= "a" && key <= "z") || (key >= "A" && key <= "Z"))) {
    return true;
  } 
  return false;
}

function checkWord(word) {
  if (language == "it") {
    return itDictionary.includes(word);
  } else if (language == "en")
  {
    return engDictionary.includes(word);
  }
}

function pickWord() {
  let randomWord;
  if (language === "it") {
    randomWord = itDictionary[Math.floor(Math.random() * itDictionary.length)];
  } else if (language === "en") {
    randomWord = engDictionary[Math.floor(Math.random() * engDictionary.length)];
  }

  return randomWord;
}


function checkForLetter(word, tableTd, j) {
  let temp = test.textContent.split("");
  let wordTemp = word;
  let x;
  for(let i = 0; i < temp.length; i++) {
    x = wordTemp.indexOf(temp[i]);
    if (i == word.indexOf(temp[i])) {
      tableTd[i + j].style.background = "green";
      wordTemp = wordTemp.replace(temp[i], "");
    }
  }

  for(let i = 0; i < temp.length; i++) {
    x = wordTemp.indexOf(temp[i]);
    if (x > -1) {
      tableTd[i + j].style.background = "orange";
      wordTemp = wordTemp.replace(temp[i], "");
    }
  }
}