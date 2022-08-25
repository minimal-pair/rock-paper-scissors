// Colors
const white = "aliceblue";
const green = "lightgreen";
const red = "lightcoral";

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

function modifyScore(textElement, modifier) {
    let text = textElement.textContent;
    let score = Number(text[text.length - 1]);
    let startText = text.slice(0, -1);
    console.log(startText);
    score += modifier;
    textElement.textContent = startText + score;
}

function displayPlayerImage(playerSelection, color) {
    playerImage.style.background = color;
    playerImage.firstElementChild.src = `images/160${playerSelection}.png`;
    playerImage.firstElementChild.style.cssText = "height: 100%; width: 100%; object-fit: cover;";
}

function displayComputerImage(computerSelection, color) {
    computerImage.style.background = color;
    computerImage.firstElementChild.src = `images/160${computerSelection}.png`;
    computerImage.firstElementChild.style.cssText = "height: 100%; width: 100%; object-fit: cover;";
}

function playRound(e) {
    const playerSelection = e.target.parentElement.id;
    const computerSelection = getComputerChoice();

    // tie
    if (playerSelection === computerSelection) {
        displayPlayerImage(playerSelection, white);
        displayComputerImage(computerSelection, white);
    // player wins
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        displayPlayerImage(playerSelection, green);
        displayComputerImage(computerSelection, red);
        modifyScore(playerText, 1);
    // player loses
    } else {
        displayPlayerImage(playerSelection, red);
        displayComputerImage(computerSelection, green);
        modifyScore(computerText, 1);
    }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

const playerImage = document.querySelector("#you-img");
const computerImage = document.querySelector("#comp-img");

const playerText = document.querySelector("#you-score");
const computerText = document.querySelector("#comp-score");


