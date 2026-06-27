let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {

    const options = ["stone", "paper", "scissor"];

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
};

const drawGame = () => {

    msg.innerText = "Game was Draw!";
};

const showWinner = (userWin, userChoice, computerChoice) => {

    if(userWin){

        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;

        msg.style.backgroundColor = "green";

    }else{

        computerScore++;

        computerScorePara.innerText = computerScore;

        msg.innerText = `You Lost! ${computerChoice} beats ${userChoice}`;

        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice){

        drawGame();

    }else{

        let userWin = true;

        if(userChoice === "stone"){

            userWin = computerChoice === "paper" ? false : true;

        }else if(userChoice === "paper"){

            userWin = computerChoice === "scissor" ? false : true;

        }else{

            userWin = computerChoice === "stone" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});