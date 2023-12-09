let userScore = 0;
let compScore = 0;

const drawGame = () =>{
    console.log("The Game Was Draw !");
    msg.innerText = "THE GAME WAS DRAW. PLAY AGAIN!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WON ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore; 
    console.log("YOU LOOSE !");
    msg.innerText = `YOU LOOSE ! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    }

};

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    // rock, paper, scissor
   const randIdx = Math.floor(Math.random() *3);
   return options[randIdx];

}
    // Generate User's Choice => input
const playGame = (userChoice) =>  {
    console.log("User's Choice is = ", userChoice);

    // Generate computer's choice -> Modular way
const compChoice = genCompChoice();
    console.log("Computer's Choice is = ", compChoice);

    if(userChoice === compChoice) {
        // Draw Game 
        drawGame();
    }
    else{
      let userWin = true;
      if(userChoice  === "rock") {
        // scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }
      else if(userChoice === "paper") {
        // rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    } else{
        // paper, rock
        userWin = compChoice === "rock" ? false : true;
    }
      showWinner(userWin, userChoice, compChoice);   
 }  
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
     const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
    
});