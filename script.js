var startQuiz = document.getElementById("start");

startQuiz.addEventListener("click", myFunction);

var seconds = 60;
var timer;
function myFunction() {
  if (seconds < 60) {
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
    alert("The quiz is over!");
  }
}
document.getElementById("start").onclick = function () {
  if (!timer) {
    timer = window.setInterval(function () {
      myFunction();
    }, 1000);
  }
};
//When a key is pressed in the text area, update the timer using myFunction

//If seconds are equal or greater than 0, countdown until 1 minute has passed
//Else, clear the timer and alert user of how many words they type per minute

document.getElementById("timer").innerHTML = "1:00";
