var startQuiz = document.getElementById("start");

document.getElementById("question1").style.display = "none";

document.getElementById("question2").style.display = "none";

document.getElementById("question3").style.display = "none";

document.getElementById("question4").style.display = "none";

document.getElementById("timer").innerHTML = "1:00";

startQuiz.addEventListener("click", myFunction);

var seconds = 60;
var timer;
var localStorage = [];
// var score = 0;

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
  document.getElementById("question1").style.display = "block";
  if (!timer) {
    timer = window.setInterval(function () {
      myFunction();
    }, 1000);
  }
};

var list = document.getElementsByClassName("wrong");
for (let item of list) {
  //   item
  item.addEventListener("change", function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
      alert(
        "That is incorrect. 5 seconds will be deducted from your remaining time!"
      );
      seconds = seconds - 5;
    }
  });
}
var list = document.getElementsByClassName("correct");
for (let item of list) {
  //   item
  item.addEventListener("change", function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
      alert("That is correct!");
    }
  });
}

var questions = ["question1", "question2", "question3", "question4"];
var currentQuestion = 0;

var list = document.getElementsByClassName("correct");
for (let item of list) {
  item.addEventListener("change", function (event) {
    if (currentQuestion < questions.length) {
      document.getElementById(questions[currentQuestion]).style.display =
        "none";
      currentQuestion++;

      if (currentQuestion < questions.length) {
        document.getElementById(questions[currentQuestion]).style.display =
          "block";
      } else {
        clearInterval(timer);
        var initials = prompt(
          "Well done! Please enter your initials. Your remaining time will be your score."
        );

        var scoresArray = Array(localStorage.getItem("userScores"));

        var userScore = {
          initials: initials,
          score: seconds,
        };

        console.log(userScore);
        scoresArray.push(userScore);

        // stringify array in order to store in local
        var scoresArrayString = JSON.stringify(scoresArray);
        window.localStorage.setItem("userScores", scoresArrayString);
      }
    }
  });
}

document.getElementById("highScore").addEventListener("click", showScores);
function showScores() {
  var allScores = "",
    keys = Object.keys(localStorage),
    i = 0,
    key;

  for (; (key = keys[i]); i++) {
    console.log(keys[i]);
    var item = localStorage.getItem(key);
    console.log(item);
    allScores += item;
  }

  document.getElementById("scores").innerHTML = allScores;
}
