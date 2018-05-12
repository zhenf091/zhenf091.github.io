//for 3ds
var renderer, scene, camera, myCanvas = document.getElementById('myCanvas');
//for scenes
var sceneState = {
  INTRO: 0,
  LAB: 1,
  ZOOM: 2,
  GALAXY: 3,
  END: 4
};

var currentState = sceneState.INTRO;  //itgwl

var keyOn = false;
var LabTimer;
var ZoomTimer;
var ZookTimePressed;
const timeForLab = 3000;
const timeForZoom = 5000;


// function run() {
//   drawScene(currentState);
//   checkTransition(currentState);
//   keyOn = false;
// }

    //RENDERER
    renderer = new THREE.WebGLRenderer({
      canvas: myCanvas, 
      antialias: true
    });
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //CAMERA
    //old
    //camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //new
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(15,-20,100);
    //SCENE
    scene = new THREE.Scene();

    //LIGHTS
    var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    var light2 = new THREE.PointLight(0xffffff, 0.5);
    scene.add(light2);


//SCENE

function drawScene(whichScene) {
  switch (currentState) {
    case sceneState.INTRO:

      break;
    case sceneState.LAB:
    updateModel1();
      break;
    case sceneState.ZOOM:
    updateModel2();
      break;
    case sceneState.GALAXY:
    updateModel3();
      break; 
    case sceneState.END:
    updateModel4();
    default:
      break;
  }
}

function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
    if (keyOn){
      setUpScene(currentState);
    }

      break;
    case sceneState.LAB:
        if (keyOn){
      setUpScene(currentState);
    }
      break;
    case sceneState.ZOOM:
        if (keyOn){
      setUpScene(currentState);
    }
      break;
    case sceneState.GALAXY:
        if (keyOn){
      setUpScene(currentState);
    }
      break;
    case sceneState.END:
        if (keyOn){
      setUpScene(currentState);
    }

      break;
    default:
      break;
  }
}

function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.LAB:
      break;
    case sceneState.ZOOM:
      break;
    case sceneState.GALAXY:
      break;
    case sceneState.END:
      break;
    default:
      break;
  }
}

function keyPressed() {
  keyOn = true;
}


//for 3DDDDDD

 function updateIntro(){

 }

 function updateModel1(){
   //Model 
    // var jsonModel = 'astro.json','class.json','gal.json','box.json';
    var jsonModel = 'class.json';
    var loader = new THREE.JSONLoader();

    //callback function, two functions in the bracket
    function handle_load(geometry, materials) {
        //BASIC MESH
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        console.log(mesh.position);
         //mesh.position.x = 20;
         //mesh.position.z = 10;
        // mesh.position.y = -100;
        //mesh have to be inside of the function.
    }
//callback function, two functions in the bracket
    loader.load(jsonModel, handle_load);
 }

 function updateModel2(){
   //Model 
    // var jsonModel = 'astro.json','class.json','gal.json','box.json';
    var jsonModel = 'box.json';
    scene.remove(scene.children[2]);
    var loader = new THREE.JSONLoader();

    //callback function, two functions in the bracket
    function handle_load(geometry, materials) {
        //BASIC MESH
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        console.log(mesh.position);
        mesh.position.y = -10;
        //mesh have to be inside of the function.
    }
//callback function, two functions in the bracket
    loader.load(jsonModel, handle_load);
 }

  function updateModel3(){
   //Model 
    // var jsonModel = 'astro.json','class.json','gal.json','box.json';
    var jsonModel = 'gal.json';
    scene.remove(scene.children[2]);
    var loader = new THREE.JSONLoader();

    //callback function, two functions in the bracket
    function handle_load(geometry, materials) {
        //BASIC MESH
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        console.log(mesh.position);
        mesh.position.z = -10;
        //mesh have to be inside of the function.
    }
//callback function, two functions in the bracket
    loader.load(jsonModel, handle_load);
 }

  function updateModel4(){
   //Model 
    // var jsonModel = 'astro.json','class.json','gal.json','box.json';
    var jsonModel = 'box.json';
    scene.remove(scene.children[2]);
    var loader = new THREE.JSONLoader();

    //callback function, two functions in the bracket
    function handle_load(geometry, materials) {
        //BASIC MESH
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        console.log(mesh.position);
        mesh.position.z = -10;
        //mesh have to be inside of the function.
    }
//callback function, two functions in the bracket
    loader.load(jsonModel, handle_load);
 }

 function Pressed(){
    drawScene(currentState);
    keyOn = true;
    if (currentState < 4){
      currentState ++;
      console.log(currentState);
    } else {
    if (currentState = 2){
      console.log(currentState);
    }
    }
    
 }

    //RENDER LOOP
    render();

    var delta = 0;
    var prevTime = Date.now();

    function render() {
    	renderer.render(scene, camera);

    	requestAnimationFrame(render);
    }