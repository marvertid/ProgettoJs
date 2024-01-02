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

wordTest.textContent += word;

document.body.onkeydown = (e) => {
  const key = e.key;

  if (key === "Backspace" && i > 0) {
    let temp = test.textContent;
    temp = temp.slice(0, -1);
    test.textContent = temp;
    tableTd[i + j - 1].textContent = " ";
    tableTd[i + j - 1].classList.remove("popAnim");
    i--;
  } else if (key === "Enter") {
    if (checkWord(test.textContent)) {

      if (test.textContent === word) {
        win();

      } else if (j >= 25) {
        lose();

      } else {

        checkForLetter(word, tableTd, j);
        
        j += 5;
        i = 0;
        test.textContent = "";
      }
    } 
  } else if (isLetter(key)) {
      if (i < 5) {
        test.textContent += key.toLowerCase();
        tableTd[i + j].textContent = key;
        i++;
        cellAnimation(i, j, tableTd);
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
  let arrPos = [0, 0, 0, 0, 0]; //array dove se il valore del numero è 0 = no match, 1 = match posizione sbagliata, 2 = match posizione esatta.
  for(let i = 0; i < temp.length; i++) {
    x = wordTemp.indexOf(temp[i]);
    if (i == word.indexOf(temp[i])) {
      arrPos[i] = 2;
      wordTemp = wordTemp.replace(temp[i], "");
    }
  }

  for(let i = 0; i < temp.length; i++) {
    x = wordTemp.indexOf(temp[i]);
    if (x > -1) {
      arrPos[i] = 1;
      wordTemp = wordTemp.replace(temp[i], "");
    }
  }
  colorAndFlip(arrPos, tableTd, i, j);
}

function cellAnimation() {
  tableTd[i + j - 1].classList.add("popAnim");
}

function colorAndFlip() {
  
}