let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissors = document.getElementById("s");
let theResult = document.getElementById("vs")
let reloadClick = document.getElementById("reload")
let playerRock = document.querySelector('.rock1')
let playerPaper = document.querySelector('.paper1')
let playerScissors = document.querySelector('.scissors1')
let comRock = document.querySelector('.rock2')
let comPaper = document.querySelector('.paper2')
let comScissors = document.querySelector('.scissors2')
let computerChoice = getComputerChoice();
let card = document.querySelectorAll('.card')
let vs = document.querySelector('.vs')
let result1 = document.querySelector('.result1')
let result2 = document.querySelector('.result2')
let result3 = document.querySelector('.result3')

function main() {
    rock.addEventListener('click', function() {
        game("r");
        changePlayerColor("r");
        changeComColor();
    })
    paper.addEventListener('click', function() {
        game("p");
        changePlayerColor("p");
        changeComColor();
    })
    scissors.addEventListener('click', function() {
        game("s");
        changePlayerColor("s");
        changeComColor();
    })
}

function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function game(playerChoice) {
    switch (playerChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            vs.style.display = 'none';
            console.log('Player Wins');
            result1.style.display = 'block';
            break;
        case "sr":
        case "ps":
        case "rp":
            vs.style.display = 'none';
            console.log('COM Wins');
            result2.style.display = 'block';
            break;
        case "rr":
        case "ss":
        case "pp":
            vs.style.display = 'none';
            console.log('Draw');
            result3.style.display = 'block';
            break;
    }
}

function changePlayerColor (playerChoice) {
    if (playerChoice === "r") {
        playerRock.style.backgroundColor = 'rgb(196, 196, 196, 1)';
    } else if (playerChoice === "p") {
        playerPaper.style.backgroundColor = 'rgb(196, 196, 196, 1)';
    } else if (playerChoice === "s") {
        playerScissors.style.backgroundColor = 'rgb(196, 196, 196, 1)';
    }
}

function changeComColor() {
    if (computerChoice === "r") {
        comRock.style.backgroundColor = 'rgb(196, 196, 196, 1)';
    } else if (computerChoice === "p") {
        comPaper.style.backgroundColor = 'rgb(196, 196, 196, 1)';
    } else if (computerChoice === "s") {
        comScissors.style.backgroundColor = 'rgb(196, 196, 196, 1)';
    }
}

function reload() {
    reload = location.reload();
}
reloadClick.addEventListener('click', reload, false)

console.log(main())