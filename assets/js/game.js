var wordsArray = ["orca", "narwhal", "manatee", "sea otter", "sea lion", "dolphin", "pufferfish", "whale", "octopus",
							"walrus", "shark", "fresh water eel",];
var lives;
var selectedWord;
var placeholder;
var userInput;
var moop;
var correctGuess;
var wins = 0;
var losses = 0;

function play(){
	
	var audio = document.getElementById("audio");
    audio.play();
 }

function newGame(){

	placeholder = [];

	selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
	console.log(selectedWord);

	for (var i = 0; i < selectedWord.length; i++){
		placeholder = placeholder + "-";
		}

	console.log(placeholder);
	document.getElementById("currentword").innerHTML = placeholder;
	lives = 10;
	document.getElementById("livesleft").innerHTML = lives;
	moop = [];
	document.getElementById("moop").innerHTML = moop;

	}

function guessLetter(){

	document.onkeyup = function(event) {
	userInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log (userInput);
	correctGuess = false;

	for (var i = 0; i < selectedWord.length; i++){
		if (userInput == selectedWord.substring(i, i + 1)){

		placeholder = placeholder.substring(0, i) + userInput + placeholder.substring(i + 1, placeholder.length + 1);
		document.getElementById("currentword").innerHTML = placeholder;
		console.log(placeholder);
		correctGuess = true;		
			}
		}
		console.log(correctGuess);

		if (correctGuess){

			for (i = 0; i < moop.length; i++){
			if(moop[i] == selectedWord.substring(i, i + 1)){
			console.log("You already picked " + moop[i] + ".");
				}
			}
		}
			else {
			for (i = 0; i < moop.length; i++){
			if(moop[i] == selectedWord.substring(i, i + 1)){
			console.log("You already picked " + moop[i] + ".");
					}
				}

			moop = moop + userInput;
			document.getElementById("moop").innerHTML = moop;

			lives--;
			document.getElementById("livesleft").innerHTML = lives;
			}
			

			if (placeholder == selectedWord){
				alert("You Win! Good job!");
				wins++;
				document.getElementById("wincount").innerHTML = wins;
				newGame();
			}
			
			if (lives == 0){
				alert("Game Over. Try Again?");
				losses++;
				document.getElementById("losscount").innerHTML = losses;
				newGame();
			}
	}
	}

	newGame();
	guessLetter();