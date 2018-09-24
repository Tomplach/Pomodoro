/* function startCount() {
    let timeLeft = 1201;
    let timerCount = setInterval(function() {
        timeLeft--;
        let mins = timeLeft / 60;
        let secs = timeLeft % 60;
        let secsWithZero = (secs < 10) ? "0"+secs : secs;
        let colon = (timeLeft % 2 == 0) ? ":" : " ";

        document.getElementById("mySpan").textContent = Math.floor(mins) + colon + secsWithZero;
        if (timeLeft <= 0) {
        clearInterval(timerCount);
        }
        }, 1000);
    }

function resetCount() {
    let mySpan = document.getElementById("mySpan");
    mySpan.textContent = "--:--";
    clearInterval(clearCount);
}

function stopCount() {
    clearCount;
}