var blueCar = document.getElementById("bluecar");
var redCar = document.getElementById("redcar");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;

blueCar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random()*3))*100)
    blueCar.style.left = random+"px";
    counter++;
})

window.addEventListener("keydown",function(e){
    if(e.keyCode =="39"){
        var redCarleft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if(redCarleft<200){
            redCar.style.left = (redCarleft+100)+"px";
        }
    };
    if(e.keyCode =="37")
})