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
});
