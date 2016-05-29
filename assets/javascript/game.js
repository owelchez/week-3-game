var gamesList = ["punchout", "mariobros", "legendofzelda", "contra", "donkeykong", 
				"balloonfight", "bomberman", "excitebike", "twinbee", "xevious"];

var correctGuesses = [];

var wrongGuesses;

var allowedGuesses = 13;

var letter;

var word = gamesList[Math.floor(Math.random() * gamesList.length)];

	for( var i = 0; i < word.length; i++)
	{
		correctGuesses += '_ ';
	}

	document.getElementById('secretWord').innerHTML = correctGuesses;

document.onkeyup = function(event) {
var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	alert("You've pressed " + userInput);





}

/**************************************/



/**************************************/












/*function guessLetter(letter)
{
	if(word.indexOf(letter) === -1)//letter is not in the word
		// increment guesses,
}
*/

//document.getElementById("").innerHTML =  ;





