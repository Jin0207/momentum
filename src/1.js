const randomGame = document.querySelector(".randomGame");
const generateNumber = document.querySelector("#generateNumber");
const guessNumber = document.querySelector("#guessNumber");
const gameResult = document.querySelector("#gameResult");

const HIDDEN_CLASSNAME = "hidden";

function startGame(event){
    event.preventDefault();
    gameResult.classList.remove(HIDDEN_CLASSNAME);

    const machineMaxrange = parseInt(generateNumber.value);
    const userChosenumber = parseInt(guessNumber.value);
    resultRandomgame(machineMaxrange, userChosenumber);
}

function resultRandomgame(machineMaxrange, userChosenumber){
    const machineChose = Math.ceil(Math.random() * machineMaxrange);
    
    
    if(machineMaxrange < userChosenumber){
        gameResult.innerHTML = `<p> You chose: ${userChosenumber}, the machine chose: ${machineChose} </p><strong> The number of machines must be higher than the number you choose. </strong>`;
    }
    else if(machineChose === userChosenumber){
        gameResult.innerHTML = `<p> You chose: ${userChosenumber}, the machine chose: ${machineChose} </p><strong> YOU WON! :) </strong>`;
    }
    else{
        gameResult.innerHTML = `<p> You chose: ${userChosenumber}, the machine chose: ${machineChose} </p><strong> YOU lost! :< </strong>`;
    
    }
}

randomGame.addEventListener("submit", startGame);