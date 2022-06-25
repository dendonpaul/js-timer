class Timer {
  constructor(durationInput, startBtn, pauseBtn, callbacks) {
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onPause = callbacks.onPause;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 50);
  };
  pause = () => {
    if (this.onPause) {
      this.onPause();
    }
    clearInterval(this.interval);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    return (this.durationInput.value = time.toFixed(2));
  }
}
