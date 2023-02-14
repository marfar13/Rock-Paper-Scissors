const TheChoices = ["Rock", "Paper", "Scissors"];
let player_score = 0;
let computer_score = 0;

let nume = prompt("introdu numele, ca sa incepem");

while (player_score < 5 && computer_score < 5) {
  
    let choice = prompt("1.Rock, 2.Paper or 3.Scissors");
  if (choice == 1)
    choice = "rock";
  else if (choice == 2)
    choice = "paper";
  else if (choice == 3)
    choice = "scissors"

  let ComputerChoice = TheChoices[Math.floor(Math.random() * TheChoices.length)];

  if (ComputerChoice.toLowerCase() == choice.toLowerCase()) 
  {
    console.log("you choice: " + choice + " and the computer choice: " + ComputerChoice);
    console.log("tie");
    console.log("the score is: " + player_score + " " + computer_score);
  } 
  else if ((ComputerChoice == "Rock" && choice == "scissors") || (ComputerChoice == "Paper" && choice == "rock") || (ComputerChoice == "Scissors" && choice == "paper")) 
  {
    computer_score++;
    console.log("you choice: " + choice + " and the computer choice: " + ComputerChoice);
    console.log("Computer win: " + computer_score + "," + player_score)
    console.log("the score is: " + player_score + " " + computer_score);
  } 
  else if ((ComputerChoice == "Scissors" && choice == "rock") || (ComputerChoice == "Rock" && choice == "paper") || (ComputerChoice == "Paper" && choice == "scissors")) 
  {

    player_score++;
    console.log("you choice: " + choice + " and the computer choice: " + ComputerChoice);
    console.log("Player win: " + computer_score + "," + player_score)
    console.log("the score is: " + player_score + " " + computer_score);
  }

  
}
