
var correctGuesses = 0;

var wrongGuesses = 0;

var guessesLeft = 6;

var dashArray = [];

var gamesList = ["punchout", "mariobros", "legendofzelda", "contra", "donkeykong", 
				"balloonfight", "bomberman", "excitebike", "twinbee", "xevious"];

var randomIndex = gamesList[Math.floor(Math.random() * gamesList.length)];

 document.getElementById("secretWord").innerHTML = randomIndex;       

document.onkeyup = function(event) {

		};
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();




//document.getElementById("dashes").innerHTML = dashes;




//document.onkeyup = function(event) {
//	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
