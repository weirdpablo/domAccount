function randomNumber() {
  let num = Math.floor(Math.random() * 60);
  let devBlock = document.getElementById("dev-block");
  let winnerBlock = document.getElementById("winner-block");
  let count = 0;
  let intervalId = setInterval(() => {
    devBlock.innerHTML = count;
    count++;
    if (count > num) {
      clearInterval(intervalId);
      if (num === 11) {
        winnerBlock.innerHTML = "Congratulations! You just won N10,000";
        confetti();
      }
    }
  }, 50);
}
