
var correctGuesses = 0;
var wrongGuesses = 0;
var guessesLeft = 5;

var gamesList = ["punchout", "mariobros", "legendofzelda", "contra", "donkeykong", 
				"balloonfight", "bomberman", "excitebike", "twinbee", "xevious"];

document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	document.getElementByClass("btn-primary").innerHTML = correctGuesses;






}





//document.getElementById("correctGuesses").innerHTML = correctGuesses;


//document.getElementById("guessesLeft").innerHTML = guessesLeft;





/*
//document.onkeyup = function(event) {
//	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


var randomGame = gameList[Math.floor(Math.random() * gamesList.length)];

var activeGame = gameList[3];



var activeGame = "";







*/