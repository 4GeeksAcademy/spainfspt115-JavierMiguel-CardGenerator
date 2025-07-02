import "bootstrap";
import "./style.css";

const cardHtml = document.getElementById("pokerCard");
const headCard = document.getElementById("pokerCardHead");
const contentCard = document.getElementById("pokerCardContent");
const bottomCard = document.getElementById("pokerCardBottom");


//challenge button and resize
const generateBtn = document.getElementById("generateBtn");
const inputWidth = document.getElementById("inputWidth");
const inputHeight = document.getElementById("inputHeight");

const card =
{
  suits: ["clubs", "hearts", "diamonds", "spades"],
  suitsSymbols: ["♣", "♥", "♦", "♠"],
  values: ["1", "2", "3", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]

}

//Function created for used in de event listener and simplifying code
const GenerateNewCard = function () {
  
  card.suits.forEach(suit => cardHtml.classList.remove(suit));

  let randomValue = Math.floor(Math.random() * card.suits.length);

  cardHtml.classList.add(card.suits[randomValue]);
  headCard.innerText = card.suitsSymbols[randomValue];
  contentCard.innerText = card.values[Math.floor(Math.random() * card.values.length)];
  bottomCard.innerText = card.suitsSymbols[randomValue];
}

//load function generate New Card
window.onload = function CardGenerator() {
  //write your code here

  GenerateNewCard();

};


// events For Button and resize inputs
document.addEventListener("DOMContentLoaded", () => {

  card.suits.forEach(suit => cardHtml.classList.remove(suit));
  
  generateBtn.addEventListener("click", GenerateNewCard);

  inputWidth.addEventListener("input", () => {
    cardHtml.style.width = inputWidth.value + "px";
  });

  inputHeight.addEventListener("input", () => {
    cardHtml.style.height = inputHeight.value + "px";
  });  

});
