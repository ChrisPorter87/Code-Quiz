var startQuiz = document.getElementById("start");

startQuiz.addEventListener("click", setInterval);

setInterval(myTimer, 60000);

var counter = 60;
function myTimer() {
  console.log(
    "You have been staring at your console for " + counter + "seconds"
  );
  counter++;
}
