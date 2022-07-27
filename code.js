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
    playerSelection = playerSelection.toLowerCase();
    
    //tie
    if (playerSelection === computerSelection) {
        return "Tie!"
    //player wins
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}`;
    //player loses
    } else {
        return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}`;
    }
}

function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        result = playRound(prompt("Rock, paper, or scissors?"), getComputerChoice());
        console.log(result);
        
    }
}