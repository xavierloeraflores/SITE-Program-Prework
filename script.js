// global constants
var clueHoldTime = 700; //how long to hold each clue's light/sound
const cluePauseTime = 300; //how long to pause in between clues
const nextClueWaitTime = 1500; //how long to wait before starting playback of the clue sequence

//Global Varaibles
//var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
//var pattern = [2, 2, 4, 3];
var pattern = [0,0,0,0,0,0,0,0];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = .5; //Between 0.0-1.0
var guessCounter = 0;
var buttonCount = 6;
var strikes = 0;
var time = 100000000;




function startGame(){
  //initialize game variables
  
  timer(10555);
  for(var i=0; i<pattern.length; i++){
    pattern[i] = Math.floor(Math.random() * Math.floor(buttonCount))+1; 
    console.log(pattern[i]);
  }
  strikes = 0;
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 750;
  
  
  
  //swap the Start & Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("time").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  //swap the Start & Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  
  time = 10000000;
  strikes = 0;
}

//Fixes an issue on Chrome where the audio wouldn't play.
function unmuteGame(){
  //initialize game variables

  volume = 0.5;
  context.resume();
  
  //swap the Start & Stop buttons
  document.getElementById("unmuteBtn").classList.add("hidden");
  document.getElementById("muteBtn").classList.remove("hidden");
  playClueSequence();
}

function muteGame(){
  //initialize game variables
  volume = 0.0;
  //swap the Start & Stop buttons
  document.getElementById("unmuteBtn").classList.remove("hidden");
  document.getElementById("muteBtn").classList.add("hidden");
}








function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}






function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter =0 ;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime -= 50;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,  delay,  pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  };
  time =15000;
}





function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("YOU WIN!!");
}



function guess(btn){
  console.log("user guessed: " + btn);

  if(!gamePlaying){
    return;
  }
  
  //Wrong Answer
  if(btn!=pattern[guessCounter]){
    
    //Adds a strike
    strikes++;
    alert("Strike");
    playClueSequence();
    guessCounter=0;
    
    //Game ends on 3rd strike
    if (strikes==3){
      loseGame();
    }
  }
  //Correct Answer
  if(btn == pattern[guessCounter]){
 
    
    //Turn Is Not Over
    if(guessCounter != progress){
      guessCounter++;
    }
    
    //Turn Is Over
    else{
      
      //Game is Over. User Won
      if(progress == pattern.length - 1){
        winGame();
      }
      
      //Game Is Not Over
      if(progress < pattern.length-1){
        progress++;
        playClueSequence();
      }      
      

    }

  }
}    

function timer(time){
  var miliseconds = time%1000;
  var seconds=(time - miliseconds)/1000
  var time = "Time: " + String(seconds) + ":" + String(miliseconds/10);
  return time;
    
}

setInterval(function(){ 
      document.getElementById("time").innerHTML = timer(time);
      time-=10;
      
      if(strikes>=3){
        loseGame();
      }
      
      
      if(time<0){
        strikes++;
        alert("Out of time: Strike!")
        time=15000;
      }
    }, 10);






// Sound Synthesis Functions
const freqMap = {
  1: 400.0,
  2: 450.0,
  3: 500.0,
  4: 550.0,
  5: 600.0,
  6: 650.0
};

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone();
  },len* 0.75);
  
  o.frequency.value = freqMap[btn]+50;
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone();
  },len * 0.2);
  
  o.frequency.value = freqMap[btn]+300;
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone();
  },len * 0.05);
}

function startTone(btn){
  if(!tonePlaying){
    console.log("test");
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
}



//Page Initialization
//Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);


//UNUSED
function winAnimation(){
  let count = 0;
  while(count < pattern.length){
    lightButton(pattern[count]);
    playTone(pattern[count],200);
    clearButton(pattern[count]);
    setTimeout(5000);
    count++;
  }
}
