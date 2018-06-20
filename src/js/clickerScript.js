var clickButton = document.querySelector(".main-page-click"), coinCounter = document.querySelector(".stats-coins");
var coins = 0;
var coinsPerSec = 0;
var multipiler =1.1;


clickButton.addEventListener("click",function(){
    coins++;
    updateCounter();
});

setInterval(function(){
    coins+=coinsPerSec;
    updateCounter();
},1000);

function updateCounter(){
    coinCounter.innerHTML=coins.toFixed();
}