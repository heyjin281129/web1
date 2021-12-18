import BLOCKS from "./blocks.js";

// DOM 선언
const playground = document.querySelector(".playground > ul");
const gameStart = document.querySelector(".game-start");
const gameText = document.querySelector(".game-text");
const scoreDisplay = document.querySelector(".score");
const bestScoreDisplay = document.querySelector(".best-score");
const startButton = document.querySelector(".game-start > button");
const restartButton = document.querySelector(".game-text > button");

// Setting 선언
const GAME_ROWS = 20;
const GAME_COLS = 10;


// variables 선언
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BEST_SCORE = "bestscore";


const movingItem = {
    type: "tree",
    // 방향키를 눌렀을때 좌우로 눌리는 역할을 도와주는 지표
    direction: 0,
    // 상하 값
    top: 0,
    // 좌우 값
    left: 3,
    
};



// 게임실행 function
function init(){
    tempMovingItem = { ...movingItem };
    for(let i=0; i<GAME_ROWS; i++){
        prependNewLine();
    }
    generateNewBlock();
}
// score 저장
function saveScore(){
    localStorage.setItem(BEST_SCORE, JSON.stringify(score));
    showGameoverText();
}

// 테트리스 게임 배경
function prependNewLine(){
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for(let j=0; j<GAME_COLS; j++){
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul);
    playground.prepend(li);
}

// 랜더링
function renderBlocks(moveType=""){
    const { type, direction, top, left } = tempMovingItem;
    // 이동시 컬러 삭제
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving =>{
        moving.classList.remove(type,"moving");
        // console.log(moving);
    })
    BLOCKS[type][direction].some(block=>{
        const x = block[0] + left;
        const y = block[1] + top;
        // 삼항연산자를 사용해서 특정 범위를 경우에는 출력이 안되도록 할 것임
        const target =  playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
        const isAvailable = checkEmpty(target);
        if(isAvailable){
            target.classList.add(type, "moving");
        }else{
            tempMovingItem = { ...movingItem };
            if(moveType === 'retry'){
                clearInterval(downInterval);
                saveScore();
            }
            // setTimeout으로 이벤트들이 다 실행된 후에 실행될 수 있도록 하기
            // 사용하지 않으면 에러가 발생합니다.
            setTimeout(()=>{
                renderBlocks('retry');
                if(moveType === "top"){
                    sizeBlocks();
                }
            },0);
            return true;
        }
    })
    movingItem.left = left;
    movingItem.top = top;
    movingItem.direction = direction;
    
}

// 끝에오면 더이상 안움직임
function sizeBlocks(){
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving =>{
        moving.classList.remove("moving");
        moving.classList.add("seized");
    })
    checkMatch()
}

// 한줄 맞추면 없어지게 하기
function checkMatch(){
    
    const childNodes = playground.childNodes;
    childNodes.forEach(child => {
        let matched = true;
        child.children[0].childNodes.forEach(li=>{
            if(!li.classList.contains("seized")){
                matched = false;
            }
        })
        if(matched){
            child.remove();
            prependNewLine();
            score ++;
            scoreDisplay.innerHTML=score;
            if(bestScore>score){
                bestScore=score;
                bestScoreDisplay.innerHTML=score;
            }
            
        }
    })

    generateNewBlock();
}

function generateNewBlock(){

    // 시간마다 내려오게 하기
    clearInterval(downInterval);
    downInterval = setInterval(()=>{
        moveBlock('top',1);
    },duration)

    // 랜덤한 도형 값을 출력하기
    const blockArray = Object.entries(BLOCKS);
    const randomIndex = Math.floor(Math.random()*blockArray.length);
    
    movingItem.type=blockArray[randomIndex][0];
    movingItem.top = 0;
    movingItem.left = 3;
    movingItem.direction = 0;
    tempMovingItem = { ...movingItem };
    renderBlocks();
}

function checkEmpty(target){
    if(!target || target.classList.contains("seized")){
        return false;
    }
    return true;
}

function moveBlock(moveType, amount){
    // console.log(amount);
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType);
}

function changeDirection(){
    const direction = tempMovingItem.direction;
    direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction += 1;
    renderBlocks();
}

function dropBlock(){
    clearInterval(downInterval);
    downInterval = setInterval(()=>{
        moveBlock("top",1);
    },10)
}

function showGameoverText(){
    gameText.style.display = "flex";
}

// event handling

// keycode 사용
document.addEventListener("keydown", e=>{
    switch(e.keyCode){
        case 39:
            moveBlock("left", 1);
            break;
        case 37:
            moveBlock("left", -1);
            break;
        case 40:
            moveBlock("top", 1);
            break;
        case 38:
            changeDirection();
            break;
        case 32:
            dropBlock();
            break;
        default:
            break;
    }
    // console.log(e);
})

startButton.addEventListener("click",()=>{
    playground.innerHTML = "";
    gameStart.style.display = "none";
    init();
})

restartButton.addEventListener("click",()=>{
    playground.innerHTML = "";
    gameText.style.display = "none";
    init();
})
