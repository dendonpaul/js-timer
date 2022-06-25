const di = document.querySelector("#duration");
const sb = document.querySelector("#start");
const pb = document.querySelector("#pause");

const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * Math.PI * 2;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;

const timer = new Timer(di, sb, pb, {
  onStart(totalDuration) {
    circle.setAttribute("stroke", "green");
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );

    if (timeRemaining <= (duration * 3) / 4) {
      circle.setAttribute("stroke", "#ffac33");
    }
    if (timeRemaining <= (duration * 1) / 2) {
      circle.setAttribute("stroke", "#ff7d33");
    }
    if (timeRemaining <= (duration * 1) / 4) {
      circle.setAttribute("stroke", "#ff4f33");
    }
    if (timeRemaining == 0) {
      circle.setAttribute("stroke", "#ff0000");
      circle.setAttribute("stroke-dashoffset", "0");
    }
  },
  onPause() {
    console.log("Timer stopped");
  },
  onComplete() {
    console.log("Timer Completed");
  },
});
