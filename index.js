

var randomNumber1 = Math.floor(Math.random()*6)+1; // 1 - 6

var diceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + diceImage; // images/dice1.png - images/dice6.png

var player_1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource );




var randomNumber2 = Math.floor(Math.random()*6)+1; // 1 - 6

var diceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

var randomImageSource2 = "images/" + diceImage2; // images/dice1.png - images/dice6.png

var player_2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2 );


if (randomNumber1 == randomNumber2) {
    document.querySelector('h1').innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 won";
}
else {
    document.querySelector('h1').innerHTML = "Player 2 won 🚩";
}



