import "./style.css";

window.onload = function () {

  let carta = document.getElementById('myCard')

  let cardSuits = ['♦', '♥', '♠', '♣'];
  let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];


  let randomCardSuits = cardSuits[Math.floor(Math.random() * cardSuits.length)];
  let randomValues = values[Math.floor(Math.random() * values.length)];


  let superiorSuit = document.querySelector(".arriba")
  superiorSuit.textContent = randomCardSuits;

  let inferiorSuit = document.querySelector(".voltear")
  inferiorSuit.textContent = randomCardSuits;

  let centerValue = document.querySelector(".valor")
  centerValue.textContent = randomValues;


  if (randomCardSuits == '♦' || randomCardSuits == '♥') {
    carta.style.color = "red";
  } else {
    carta.style.color = "black";
  }
 
console.log(randomCardSuits);
console.log(randomValues);
}

