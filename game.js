let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreP = document.querySelector("#user-score");
const compScoreP =document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randOps = Math.floor(Math.random()*3);
    return options[randOps];
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); 
    });
} );

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = "true";
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if (userWin) {
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    
    } else {
        compScore++;
        compScoreP.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}