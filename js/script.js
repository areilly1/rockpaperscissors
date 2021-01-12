// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let userChoice = "";
let computerChoice = "";
let winner = "";
let randomNumber = 0;

$("#shoot").click(function() {
  let message = $("#input").val();
  randomNumber = Math.floor(Math.random() * 3);
  userChoice = message;
  $("#userChoice").html(userChoice);
  if (randomNumber == 1) {
    $("#computerChoice").html("rock");
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    $("#computerChoice").html("paper");
    computerChoice = "paper";
  } else {
      $("#computerChoice").html("scissors");
    computerChoice = "scissors";
    }
  
  if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper")
    {
      $("#result").html("You win");
      $("#input").val("");
    }else if (userChoice === "rock" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "rock") {
      $("#result").html("You lose");
      $("#input").val("");
    } else {
      $("#result").html("Tie");
      $("#input").val("");
    }
});
