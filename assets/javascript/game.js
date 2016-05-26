
var correctGuesses = 0;

var wrongGuesses = 0;

var guessesLeft = 6;

var dashArray = [];

var letter = "";

var gamesList = ["punchout", "mariobros", "legendofzelda", "contra", "donkeykong", 
				"balloonfight", "bomberman", "excitebike", "twinbee", "xevious"];

var randomIndex = gamesList[Math.floor(Math.random() * gamesList.length)];

console.log(randomIndex);

var dashes = randomIndex.length;

console.log(dashes);

for(i = dashes; i > 0; i--)
{
	letter[i] = + "-";
	console.log(letter);
}

document.getElementById("dashes").innerHTML = letter;



//document.getElementById("dashes").innerHTML = dashes;












//var rand = myArray[Math.floor(Math.random() * myArray.length)];

//	document.getElementById("correctGuesses").innerHTML = correctGuesses;



//document.getElementById("correctGuesses").innerHTML = correctGuesses;


//document.getElementById("guessesLeft").innerHTML = guessesLeft;





/*
//document.onkeyup = function(event) {
//	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();




var activeGame = gameList[3];



var activeGame = "";







*/