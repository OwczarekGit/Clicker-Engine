var shopWindow = document.querySelector(".shop"), shopToggle = document.querySelector(".menubar-shop"),opened = false;


var shopItems = [
    {
        name: "Unity",
        image: "img/item0.png",
        income: 1,
        owned: 1,
        basePrice: 10,
        price: 10
    },
    {
        name: "Unity 3D",
        image: "img/item0.png",
        income: 10,
        owned: 1,
        basePrice: 100,
        price: 100
    }
];

init();


shopToggle.addEventListener("click",function(){
    if(!opened){
        shopWindow.style.transform = "translateY(0%)";
        opened = true;
    }else{
        shopWindow.style.transform = "translateY(-100%)";
        opened = false;

    }
});

function init(){
    var elements = $();
    for(let i=0;i<shopItems.length;i++){
        elements = elements.add(
        '<li class="shop-item" id="shopItemElement'+i+'">'+'<div class="shop-item-image">'+'<img src="'+shopItems[i].image+'" alt="" class="shop-item-image">'+'</div>'+'<div class="shop-item-data">'+'<h1 class="shop-item-name">'+shopItems[i].name+'</h1>'+'<h2 class="shop-item-count" id="shopItemElementOwned'+i+'">'+(shopItems[i].owned -1)+" owned"+'</h2>'+'<h3 class="shop-item-price" id="shopItemElementPrice'+i+'">'+shopItems[i].basePrice + "$"+'</h3>'+'</div>'+'</li>');
    }
    $('#shop-products').append(elements);
}

var shopItemElement=[];
var shopItemElementOwnedList = [];
var shopItemElementPriceList = [];

for(let i=0;i<shopItems.length;i++){
    shopItemElement.push(document.getElementById("shopItemElement"+i));
    shopItemElementOwnedList.push(document.getElementById("shopItemElementOwned"+i));
    shopItemElementPriceList.push(document.getElementById("shopItemElementPrice"+i));

    shopItemElement[i].addEventListener("click",function(){
        if(coins>=shopItems[i].price){
            coins-=shopItems[i].price;
            shopItems[i].price = shopItems[i].basePrice*Math.pow(multipiler,shopItems[i].owned);

            shopItems[i].owned++;
            coinsPerSec=shopItems[i].income*shopItems[i].owned;

            shopItemElementOwnedList[i].innerHTML=(shopItems[i].owned - 1) + " owned";
            shopItemElementPriceList[i].innerHTML=shopItems[i].price.toFixed() + " $";

            
            updateCounter();
        }
    });
}

