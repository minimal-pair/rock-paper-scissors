function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let num = getRandomInt(0, 3);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function capitalize(str) {
    let firstLetter = str.slice(0, 1);
    let restOfWord = str.slice(1);

    firstLetter = firstLetter.toUpperCase();
    restOfWord = restOfWord.toLowerCase();
    return firstLetter + restOfWord;
}

function playRound(playerSelection, computerSelection) {    
    //tie
    if (playerSelection === computerSelection) {
        return 0
    //player wins
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return 1;
    //player loses
    } else {
        return 2;
    }
}

function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, paper, or scissors?");
        playerChoice = playerChoice.toLowerCase();

        let computerChoice = getComputerChoice();

        result = playRound(playerChoice, computerChoice);
        switch (result) {
            case 0:
                console.log("Tie!");
                break;
            case 1:
                console.log(`You win! ${capitalize(playerChoice)} beats ${computerChoice}`);
                break;
            case 2:
                console.log(`You lose! ${capitalize(computerChoice)} beats ${playerChoice}`)
                break;
        }
    }
}

game();