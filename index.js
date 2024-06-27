document.querySelector(".btn").addEventListener("click", handleClick)

function handleClick() {
let randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
document.querySelector(".img1").setAttribute("src", randomNumber1);

let randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
document.querySelector(".img2").setAttribute("src", randomNumber2);

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = " Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
	document.querySelector("h1").innerHTML = "Draw";
}
}


