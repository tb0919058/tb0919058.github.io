var pixels2 = 0;
var pixels = 0;

var redCar=document.getElementById('redCar');
var greenCar = document.getElementById('greenCar');
var start = document.getElementById("startButton");
start.addEventListener("click", startGame, false);

function startGame() {
  start.src = "Go!.gif";
  start.height = "400";

  function redMove(){
    
    redCar.setAttribute ("style", "margin-left:" + pixels + "px;");
    randomPixels2 = Math.ceil(Math.random()*70)
    pixels2 = (pixels2 + randomPixels2);
    if (pixels2 > 600) {
      stoptimer();
      redCar.src = "winner.gif";
      redCar.width ="220";
    }
  }

  function greenMove(){
    greenCar.setAttribute ("style", "margin-left:" + pixels + "px;");
    randomPixels = Math.ceil(Math.random()*60)
    pixels = (pixels + randomPixels);
    if (pixels > 600) {
      stoptimer();
      greenCar.src = "winner.gif";
      greenCar.width = "220";
    }
  }
    Timer2 = setInterval(redMove, 500)
    Timer = setInterval(greenMove, 500)

  function stoptimer(){
    clearInterval(Timer);
    clearInterval(Timer2);
  }
}