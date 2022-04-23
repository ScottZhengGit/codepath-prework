/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Test");

var clueHoldTime = 1000;

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000;

var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var buttons = 8;
var strikes = 0;
var hardAudio = new Audio();
var name = "guest";
var timeLeft = 10;
var flag = true;
var count = 0;
var maxCount = 0;
var maxTime = 10;
var timerID = 0;

function startGame() {
  count = 0;
  strikes = 0;
  clueHoldTime = 1000;
  strikes = 0;
  progress = 0;
  gamePlaying = true;
  timeLeft = 10;
  flag = true;

  document.getElementById("heart1").classList.remove("hidden");
  document.getElementById("heart2").classList.remove("hidden");
  document.getElementById("heart3").classList.remove("hidden");

  // Generate random inputs for the game
  for (let i = 0; i < buttons; i++) {
    pattern.push(Math.floor(Math.random() * buttons) + 1);
    console.log(pattern[i]);
  }

  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    clueHoldTime /= 1.08;
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  timeLeft = maxTime + 1;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  if (flag == true || gamePlaying == false) {
    window.timerID = window.setInterval(countDown, 1000);
  }
  flag = false;
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      //Pattern correct. Add next segment
      timeLeft = maxTime;

      progress++;

      document.getElementById("currentScore").innerHTML = progress;
      count += 1;

      playClueSequence();
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    strikes += 1;

    if (strikes == 1) {
      document.getElementById("heart3").classList.add("hidden");
    }
    if (strikes == 2) {
      document.getElementById("heart3").classList.add("hidden");
      document.getElementById("heart2").classList.add("hidden");
    }

    if (strikes == 3) {
      document.getElementById("heart3").classList.add("hidden");
      document.getElementById("heart2").classList.add("hidden");
      document.getElementById("heart1").classList.add("hidden");
      loseGame();
    }
  }
}

function loseGame() {
  if (count > maxCount) {
    document.getElementById("maxScore").innerHTML = count;

    maxCount = count;
  }

  stopGame();
  alert("Game Over. You lost.");
  window.clearInterval(timerID);
  document.getElementById("currentScore").innerHTML = 0;
}

function winGame() {
  stopGame();
  alert("Game Over. You Won!");
}

function mode(num) {
  if (num == 1) {
    document.getElementById("button5").classList.add("hidden");
    document.getElementById("button6").classList.add("hidden");
    document.getElementById("button7").classList.add("hidden");
    document.getElementById("button8").classList.add("hidden");
    buttons = 4;
  } else if (num == 2) {
    document.getElementById("button5").classList.remove("hidden");
    document.getElementById("button6").classList.remove("hidden");
    document.getElementById("button7").classList.add("hidden");
    document.getElementById("button8").classList.add("hidden");
    buttons = 6;
  } else if (num == 3) {
    document.getElementById("button5").classList.remove("hidden");
    document.getElementById("button6").classList.remove("hidden");
    document.getElementById("button7").classList.remove("hidden");
    document.getElementById("button8").classList.remove("hidden");
    buttons = 8;
  }
}

function countDown() {
  // together with setInterval, counts down the time
  if (!flag) {
    timeLeft -= 1;
    document.getElementById("count").innerHTML = timeLeft;
  }

  // if no time left, lose()
  if (timeLeft == 0) {
    loseGame();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 550,
  6: 600,
  7: 700,
  8: 800,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
