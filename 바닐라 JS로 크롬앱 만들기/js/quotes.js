const quotes = [
    {
        quote : "그래도 지구는 돈다",
        auctor : "갈릴레오 갈릴레이",
    },
    {
        quote : "나는 생각한다 고로 나는 존재한다",
        auctor : "르네 데카르트",
    },
    {
        quote : "내 사전에 불가능이란 단어는 없다",
        auctor : "나폴레옹",
    },
    {
        quote : "역사를 잊은 민족에게 미래는 없다",
        auctor : "미상",
    },
    {
        quote : "주사위는 던져졌다",
        auctor : "율리우스 카이사르",
    },
    {
        quote : "왔노라, 보았노라, 이겼노라",
        auctor : "율리우스 카이사르",
    },
    {
        quote : "시작은 미약하였으나 끝은 창대하리라",
        auctor : "빌닷",
    },
    {
        quote : "죄는 미워하되 사람은 미워하지 말라",
        auctor : "아우구스티누스",
    },
    {
        quote : "달리는 기차 위에 중립은 없다",
        auctor : "하워드 진",
    },
    {
        quote : "진실은 당신의 기분따위 상관하지 않는다",
        auctor : "벤 샤피로",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.auctor;
