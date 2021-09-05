/*const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");*/
/*
const loginForm = document. querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //event가 하는 원래 행동을 멈춰줌
  loginForm.classList.add(HIDDEN_CLASSNAME); //form을 다시 숨김
  //const username = loginInput.value; 
  //greeting.innerText = "Hello " + username;
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings(); //유저가 form안에 있는 input에 입력한 username을 받고있음

  function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);//show the form
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings();//show the greetings
}*/
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