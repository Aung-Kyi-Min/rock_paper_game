const computer = document.getElementById('computer');
const user = document.getElementById('user');
const result = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let output;


possibleChoice.forEach(pchoice => pchoice.addEventListener('click',(e) => {


    userChoice = e.target.id;
    user.innerHTML = userChoice;
    getcomputerChoice();
    getResult();


}));

function getcomputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length )  + 1;
    // console.log(randomNumber);
    if(randomNumber === 1){
        computerChoice= 'rock';
    }
    if(randomNumber === 2){
        computerChoice= 'sciccors';
    }
    if(randomNumber === 3){
        computerChoice= 'paper';
    }
    computer.innerHTML = computerChoice;
};

function getResult(){
    if(computerChoice === userChoice){
        output = "It's a draw !!!! ";
    }
    if(computerChoice === 'rock' &&  userChoice === 'paper'){
        output = "You win !!!! ";
    }
    if(computerChoice === 'rock' &&  userChoice === 'sciccors'){
        output = "You Lose !!!! ";
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        output = "You Lose !!!! ";
    }
    if(computerChoice === 'paper' && userChoice === 'sciccors'){
        output = "You win !!!! ";
        console.log(userChoice);
    }
    if(computerChoice === 'sciccors' && userChoice === 'paper'){
        output = "You Lose !!!! ";
    }
    if(computerChoice ==='sciccors' && userChoice === 'rock'){
        output = "You Win !!!! ";
    }
    result.innerHTML = output;

}

