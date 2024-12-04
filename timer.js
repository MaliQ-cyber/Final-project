let timer;
let isWorking = true; // true = work session, false = break session
let timeLeft = 25 * 60; // 25 minutes for testing

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function startTimer() {
    timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert(isWorking ? 'Pomodoro session ended! Take a break.' : 'Break is over! Time to work!');
            // Toggle between work and break
            isWorking = !isWorking;
            timeLeft = isWorking ? 25 * 60 : 5 * 60; // Reset time to 25 mins for work or 5 mins for break
            startTimer(); // Start the next session (work or break)
        } else {
            timeLeft--;
            updateDisplay();
        }
    }, 1000);
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60; 
}

startButton.addEventListener('click', function () {
    startTimer();
});

resetButton.addEventListener('click', function () {
    resetTimer();
});

updateDisplay();