const clockTitle = document.querySelector(".js-clock");


const christmas = new Date("2021-12-25,00:00:00").getTime();

function handleChristmas(){
    const nowTime = new Date().getTime();

    const REMAINING_DAY = (christmas-nowTime);
    
    const nowDate = Math.floor(REMAINING_DAY/(1000*60*60*24));
    const nowHours = Math.floor((REMAINING_DAY%(1000*60*60*24))/(1000*60*60));
    const nowMinutes = Math.floor((REMAINING_DAY%(1000*60*60))/(1000*60));
    const nowSeconds = Math.floor((REMAINING_DAY%(1000*60))/1000);
    
    clockTitle.innerHTML=`${nowDate}d ${nowHours}h ${nowMinutes}m ${nowSeconds}s`;

}

handleChristmas();
setInterval(handleChristmas,1000);