import "bootstrap";
import "./style.css";

let cardHtml = "";
let headCard = "";
let contentCard = "";
let bottomCard = "";

const card =
{
  suits: ["clubs", "hearts", "diamonds", "spades"],
  suitsSymbols: ["♣", "♥", "♦", "♠"],
  values: ["1", "2", "3", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]

}

//load function generate New Card
window.onload = function CardGenerator() {
  //write your code here

  cardHtml = document.getElementById("pokerCard");
  headCard = document.getElementById("pokerCardHead");
  contentCard = document.getElementById("pokerCardContent");
  bottomCard = document.getElementById("pokerCardBottom");

  let randomValue = Math.floor(Math.random() * card.suits.length);

  cardHtml.classList.add(card.suits[randomValue]);
  headCard.innerText = card.suitsSymbols[randomValue];
  contentCard.innerText = card.values[Math.floor(Math.random() * card.values.length)];
  bottomCard.innerText = card.suitsSymbols[randomValue];

};


