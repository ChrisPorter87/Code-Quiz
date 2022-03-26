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
// var currentQuestion = 1;
// function quiz() {
//   document.getElementById("timer").innerHTML = "question one";
//   document.buttonclick(currentQuestion++);

//   if ((currentQuestion = 2)) {
//     document.getElementById("timer").innerHTML = "question two";
//   }
//   if ((currentQuestion = 3)) {
//     document.getElementById("timer").innerHTML = "question three";
//   }
// }
document.getElementById("start").onclick = function () {
  if (!timer) {
    timer = window.setInterval(function () {
      myFunction();
    }, 1000);
  }
};

document.getElementById("timer").innerHTML = "1:00";

document.getElementById("wrong").addEventListener("change", function (event) {
  if (event.target && event.target.matches("input[type='radio']")) {
    alert(
      "That is incorrect. 5 seconds will be deducted from your remaining time!"
    );
  }
});

document.getElementById("correct").addEventListener("change", function (event) {
  if (event.target && event.target.matches("input[type='radio']")) {
    alert("That is correct!");
  }
});
