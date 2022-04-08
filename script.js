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
        var highscores =
          JSON.parse(window.localStorage.getItem("scoreInfo")) || [];

        // data structure for new scores
        var newInfo = {
          score: seconds,
          initials: initials,
        };

        // write to localstorage
        highscores.push(newInfo);
        window.localStorage.setItem("scoreInfo", JSON.stringify(highscores));
      }
    }
  });
}

document.getElementById("highScore").addEventListener("click", showScores);

function showScores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("scoreInfo")) || [];

  // sort highscores by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var highScores = document.getElementById("scores");
    highScores.appendChild(liTag);
  });
}
