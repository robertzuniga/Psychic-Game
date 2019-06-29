//Robert Zuniga
<script>
  // Creates an array that lists out all of the options (alphabet).
  
  var computerChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y","z"];
    
  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var wins = 0;   var losses = 0;  var numberOfGuesses = 9; var yourGuesses = [];  
    
  // Create variables that hold references to the places in the HTML where we want to display things.
  var userChoiceText = document.getElementById("userchoice-text");
  var computerChoiceText = document.getElementById("computerchoice-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessLeft = document.getElementById("guessleft-text");
  var yourGuessesSoFar=document.getElementById("yourguessessofar-text");
  
  console.log("before key");
  
  document.onkeyup = function(event) {
  
  var userGuess = event.key;

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (numberOfGuesses> -1) {
                if (userGuess === computerGuess) {
                    wins ++;
                    numberOfGuesses =9;
                    yourGuesses =[];
                }

                if (userGuess !== computerGuess) {
                    numberOfGuesses --;
                    yourGuesses.push=[userGuess];
                }

                if (numberOfGuesses === 0) { 
                    losses ++;
                    yourGuesses =[];
                    numberOfGuesses=9;
                } //end if     
                //directionsText.textContent="";
    }

     userChoiceText.textContent =     " You chose: " + userGuess;
     computerChoiceText.textContent = " The computer chose: " + computerGuess;
     winsText.textContent =           " Wins: " + wins;
     lossesText.textContent =         " Losses: " + losses;
     guessLeft.textContent =          " Guesses Left: " + numberOfGuesses;        
     yourGuessesSoFar.textContent =   "Your guesses so far: " + userGuess;         
    console.log("=> wins =>", wins);
  }
  console.log("after key");
</script>