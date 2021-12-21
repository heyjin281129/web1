const MaxNumber = document.querySelector("#MaxNumber");
const MyNumber = document.querySelector("#MyNumber");
const RandomGameBtn = document.querySelector(".random-number-game-form button");
const Result = document.querySelector("#Result");
const ResultText = document.querySelector("#ResultText");


let RANDOM_NUMBER;
let MAX_NUMBER;
let MY_NUMBER;

function handleBtn(){
    MAX_NUMBER = parseInt(MaxNumber.value);
    MY_NUMBER = parseInt(MyNumber.value);

    if(!MY_NUMBER || !MAX_NUMBER){
        Result.innerHTML = `값을 제대로 입력했는지 확인해주세요.`
        ResultText.innerHTML = ``;
    }else{
        RandomGame();
    }
}


function RandomGame(){
    RANDOM_NUMBER = Math.ceil(Math.random()*MAX_NUMBER);
    RandomResult();
}

function RandomResult(){
    if(MY_NUMBER === RANDOM_NUMBER){
        Result.innerHTML=`You chose : ${MY_NUMBER}, the machine chose : ${RANDOM_NUMBER}.`
        ResultText.innerHTML=`You won!`;
    }else{
        Result.innerHTML=`You chose : ${MY_NUMBER}, the machine chose : ${RANDOM_NUMBER}.`
        ResultText.innerHTML=`You lost!`;
    }
}

RandomGameBtn.addEventListener("click", handleBtn);
