var blueCar = document.getElementById("bluecar");
var redCar = document.getElementById("redcar");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;

blueCar.addEventListener("animationiteration", function () {
  var random = Math.floor(Math.random() * 3) * 100;
  blueCar.style.left = random + "px";
  counter++;
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    var redCarLeft = parseInt(
      window.getComputedStyle(redCar).getPropertyValue("left")
    );
    if (redCarLeft < 200) {
      redCar.style.left = redCarLeft + 100 + "px";
    }
  }
  if (e.keyCode == "37") {
    var redCarLeft = parseInt(
      window.getComputedStyle(redCar).getPropertyValue("left")
    );
    if (redCarLeft > 0) {
      redCar.style.left = redCarLeft - 100 + "px";
    }
  }
});
setInterval(function Gameover(){
    var blueCarTop= parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
     var blueCarLeft= parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
     var redCarLeft= parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
     if((blueCarLeft === redCarLeft)&&(blueCarTop>250)&&(blueCarTop<450)){
        result.style.display ="block";
        game.style.display ="none";
        score.innerHTML =`Your score is ${counter}`;

        counter = 0;

     }
 },10)