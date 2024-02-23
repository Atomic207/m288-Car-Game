var blueCar = document.getElementById("bluecar");
var redCar = document.getElementById("redcar");
var result = document.getElementById("result");
var scoreDisplay = document.getElementById("score");
var highScoreDisplay = document.getElementById("highScoreDisplay"); // Updated reference
var game = document.getElementById("game");
var counter = 0;

// Check for existing high score in local storage
var highScore = localStorage.getItem("highScore") || 0;

// Display the high score on the page
highScoreDisplay.innerHTML = "High Score: " + highScore;

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

function restartGame() {
  result.style.display = "none";
  game.style.display = "block";
}

setInterval(function Gameover() {
  var blueCarTop = parseInt(
    window.getComputedStyle(blueCar).getPropertyValue("top")
  );
  var blueCarLeft = parseInt(
    window.getComputedStyle(blueCar).getPropertyValue("left")
  );
  var redCarLeft = parseInt(
    window.getComputedStyle(redCar).getPropertyValue("left")
  );

  if (blueCarLeft === redCarLeft && blueCarTop > 250 && blueCarTop < 450) {
    result.style.display = "block";
    game.style.display = "none";

    // Update the high score if the current score is higher
    if (counter > highScore) {
      highScore = counter;
      localStorage.setItem("highScore", highScore);
    }

    scoreDisplay.innerHTML = "Your score is " + counter;
    highScoreDisplay.innerHTML = "High Score: " + highScore;

    counter = 0;
  }
}, 10);
