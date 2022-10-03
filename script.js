var wordCount = document.getElementById("wordCount");
var characterCount = document.getElementById("characterCount");
var vowelCount = document.getElementById("vowelCount");
function getWordCount(str) {
  str = str.toLowerCase();
  let wordCounter = 0;
  wordCounter = str.split(" ").length;
  wordCount.innerHTML = wordCounter;
}

function getCharacterCount(str) {
  str = str.toLowerCase();
  let charCounter = 0,
    sentenceWithoutWhiteSpace = 0;
  sentenceWithoutWhiteSpace = str.replace(/\s/g, "");
  charCounter = sentenceWithoutWhiteSpace.length;
  characterCount.innerHTML = charCounter;
}
function getVowelCount(str) {
  str = str.toLowerCase();
  let vowArr = ["a", "e", "i", "o", "u"],
    vowelCounter = 0;
  for (let letter of str) {
    if (vowArr.includes(letter)) {
      vowelCounter++;
    }
  }
  vowelCount.innerHTML = vowelCounter;
}
