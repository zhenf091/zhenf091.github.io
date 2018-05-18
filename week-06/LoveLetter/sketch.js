
///////////////////////////////////////////////////////////
/////////////PLEASE READ///////////////////////////////////
//States code from Bryan Ma's original state changing code.
//HTML CODE - SCRAMBLE TEXT EFFECT LIBRARY from https://yomotsu.github.io/
//SUPPOSED TO FIRST INTRODUCE THE CODE, AND WHEN YOU HIT//
//HIT THE START BUTTON, IT WILL RANDOMLY PULL OUT ////////
//A SENTENCE FROM THE ARRAY.//////////////////////////////
//////THIS VERSION CAN ONLY DISPLAY ONE STATE WHICH///////
//////IS THE TEXT PART, THE RANDOM ARRAY DID NOT//////////
//////WORK, SO I JUST DISPLAY ONE OF THE SENTENCES////////
/////////////////////////////////////////////////////////
///////////THANK YOU!!!---PHOEBE ZHENG///////////////////



var randomItem;
var sceneState = {
  INTRO: 0,
  GENERATE: 1,
  SHOW: 2,
};

var currentState = sceneState.INTRO;

var keyOn = false;
var gTimer;

const timeForG= 3000;

function setup(){
 //	createCanvas(800,800);
 	var myArray = [
  		"Your words touch my heart, whispers of truth reflections, with fingers of love.",
		  "Love is not complex, it demands an absent mind, and a present heart.",
 		 "Your body arched, taut and trembling like a bow, I, the archer."
	];
	randomItem = myArray[Math.floor(Math.random()*myArray.length)];
}

function draw(){
	//background(0);
	 //fill(255);
	// text(randomItem, 100, 100);
	  drawScene(currentState);
  checkTransition(currentState);
  keyOn = false;
}

function drawScene(whichScene) {
  switch (currentState) {
    case sceneState.INTRO:
      background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
      fill(255);
      textSize(80);
      textAlign(CENTER, CENTER);
      text("WELCOME TO\nTHE\n\"LOVE GENERATOR\"", width/2, height/2);
      break;
    case sceneState.GENERATE:
 if (millis() > gTimer + timeForG) {
    background(150, 200, 200);
    fill(0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("HIT ENTER", width/2, height/2 - 100);
    textSize(32);
}
    break;

 case sceneState.SHOW:
var scrambleText = new ScrambleText( document.getElementById( 'text1' ) ).start();

}

    }

   function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.GENERATE:
      if (millis() > gTimer + timeForG) {
        if (keyOn) {
          currentState++;
          setUpScene(currentState);      
        }
      }
      break;
     case sceneState.SHOW:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
  }
  function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.GENERATE:
      tutorialTimer = millis();
      break;
       case sceneState.SHOW:
      break;
  }
}

function keyPressed() {
  keyOn = true;
}

document.getElementById("text").innerHTML;

var rand = Math.floor(random(data.happy.length));
data.happy[rand] + data.sad[rand];

// function parseJSON(data){
// 	for (var i = 0; i < data.length; i++){
// 		//console.log(data[i]);
// 		positions.push(new myArray(randomItem));
// 	}
// }

// var words = require("./words.json");
// console.log(words.a[0]); // darkness  

 
data.fragments[0];