const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var nemichanImg = new Image();
nemichanImg.src = 'src/img/nemichan.PNG'

const nemichan = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(nemichanImg, this.x, this.y); 
    }
}

var giyuImg = new Image();
giyuImg.src = 'src/img/giyu.PNG';


class Giyu {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(giyuImg, this.x, this.y)
    }
}


let timer = 0;
const giyuMany = [];
var jumpTimer = 0;
let animation;


function frame(){
    animation = requestAnimationFrame(frame);
    timer++;

    ctx.clearRect(0,0,canvas.width, canvas.height);

    if(timer % 200 === 0){
        const giyu = new Giyu();
        giyuMany.push(giyu);
    }

    giyuMany.forEach((a, i, o)=>{
        // x좌표가 0미만이면 제거
        if(a.x < 0){
            o.splice(i, 1);
        }
        a.x--;

        giyusane(nemichan, a);

        a.draw();
    })
    
    if(jumpKey == true){
        nemichan.y--;   
        jumpTimer++;
    }
    if(jumpKey == false){
        if(nemichan.y < 200){
            nemichan.y++;
        }
    }
    if(jumpTimer > 100){
        jumpKey = false;
        jumpTimer = 0;
    }

    nemichan.draw();
}

frame();

// 충돌확인

function giyusane(nemichan, giyu){
    var xGiyusane = giyu.x - (nemichan.x + nemichan.width);
    var yGiyusane = giyu.y - (nemichan.y + nemichan.height);
    if(xGiyusane < 0 && yGiyusane < 0){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}

var jumpKey = false;

document.addEventListener('keydown',function(e){
    if(e.code === 'Space'){
        jumpKey = true;
    }
})