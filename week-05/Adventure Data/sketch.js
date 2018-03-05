// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 5
// choose your own adventure data

// scene data model: 

// {
//   sceneText: '', //the scene text
//   options: [], // the text options to choose
//   nextScenes: []  // the target scene based on the previous options
// }

var sceneData;
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");
var currentScene = 0;
var scenes = [];

function preload() {
  sceneData = loadJSON('scenes.json');
}

function setup() {
  createCanvas(800, 800);
  CreateScenesFromData(sceneData.scenes);
}

function draw() {
  background(255);
  scenes[currentScene].display();
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes))
  }
}

function Scene(sceneText, options, nextScenes) {
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;

  this.display = function() {
    fill(0);
    textSize(32);
    text(this.sceneText, 100, 100);

    for (var i = 0; i < options.length; i++) {
      text('OPTION ' + (i + 1) + ': ' + this.options[i], 150, 200 + i * 50);
    }
  }
}

function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }

keyPressed = function() {
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
};

var Scene1 = function() {
    currentScene = 1;
    background(255);
};

var drawScene2 = function() {
    currentScene = 2;
    background(255);
    context.beginPath();
    context.arc(75, 75, 5, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.arc(114, 75, 5, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
    context.closePath();
    context.fill();
};

var drawScene3 = function() {
    currentScene = 3;
    background(255);
    context.beginPath();
    context.arc(75, 75, 5, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.arc(114, 75, 5, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.arc(95, 130, 40, 2*Math.PI, Math.PI, true);
    context.closePath();
    context.fill();
};


}