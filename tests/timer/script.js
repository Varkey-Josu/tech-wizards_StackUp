class PomodoroTimer {
    constructor() {
        this.timer = null;
        this.minutes = 25;
        this.seconds = 0;
        this.isPaused = false;

        this.elements = {
            focusBtn: document.getElementById("focus"),
            shortBreakBtn: document.getElementById("shortbreak"),
            longBreakBtn: document.getElementById("longbreak"),
            timeDisplay: document.getElementById("time"),
            startBtn: document.getElementById("btn-start"),
            pauseBtn: document.getElementById("btn-pause"),
            resetBtn: document.getElementById("btn-reset")
        };

        this.elements.focusBtn.addEventListener("click", () => this.startTimer(25, 0));
        this.elements.shortBreakBtn.addEventListener("click", () => this.startTimer(5, 0));
        this.elements.longBreakBtn.addEventListener("click", () => this.startTimer(15, 0));
        this.elements.startBtn.addEventListener("click", () => this.toggleTimer());
        this.elements.pauseBtn.addEventListener("click", () => this.toggleTimer());
        this.elements.resetBtn.addEventListener("click", () => this.resetTimer());

        this.updateTimeDisplay();
    }

    startTimer(minutes, seconds) {
        if (this.timer !== null) {
            this.stopTimer();
        }

        this.minutes = minutes;
        this.seconds = seconds;
        this.isPaused = false;

        this.timer = setInterval(() => {
            if (this.seconds > 0) {
                this.seconds--;
            } else if (this.minutes > 0) {
                this.minutes--;
                this.seconds = 59;
            } else {
                this.stopTimer();
                return;
            }

            this.updateTimeDisplay();
        }, 1000);

        this.toggleControls(true);
    }

    stopTimer() {
        clearInterval(this.timer);
        this.timer = null;
        this.toggleControls(false);
    }

    toggleTimer() {
        if (this.timer === null) {
            this.startTimer(this.minutes, this.seconds);
        } else {
            this.isPaused = !this.isPaused;
            this.toggleControls(this.isPaused);
        }
    }

    resetTimer() {
        this.stopTimer();
        this.minutes = 25;
        this.seconds = 0;
        this.updateTimeDisplay();
    }

    updateTimeDisplay() {
        const formattedMinutes = this.minutes.toString().padStart(2, "0");
        const formattedSeconds = this.seconds.toString().padStart(2, "0");
        this.elements.timeDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }

    toggleControls(isPaused) {
        this.elements.startBtn.style.display = isPaused ? "block" : "none";
        this.elements.pauseBtn.style.display = isPaused ? "none" : "block";
        this.elements.resetBtn.style.display = isPaused ? "block" : "none";
    }
}

new PomodoroTimer();
