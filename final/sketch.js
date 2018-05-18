//for 3ds
var renderer, scene, camera, myCanvas = document.getElementById('myCanvas');
//for scenes
var sceneState = {
  INTRO: 0,
  TEXT: 1,
  LAB: 2,
  ZOOM: 3,
  GALAXY: 4,
  END: 5
};

var currentState = sceneState.INTRO;  //itgwl

var keyOn = false;
var LabTimer;
var ZoomTimer;
var ZookTimePressed;
const timeForLab = 3000;
const timeForZoom = 5000;


//nasa

// var url = "https://api.nasa.gov/planetary/apod?api_key=ylcqMbCTnxnOkaZtorFssBIUoOre4V2nRTrFklmj";


// $.ajax({
//   url: url,
//   success: function(result){
//   if("copyright" in result) {
//     $("#copyright").text("Image Credits: " + result.copyright);
//   }
// });


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
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.7, 600 );
    camera.position.set(0,0,30);
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
    case sceneState.TEXT:
    updateModel1();
      break;
    case sceneState.LAB:
    updateModel2();
      break;
    case sceneState.ZOOM:
    updateModel3();
      break;
    case sceneState.GALAXY:
    updateModel4();
      break; 
    case sceneState.END:
    updateModel5();
    default:
      break;
  }
}

function checkTransition(whichScene) {

  //check currentstate
  switch (whichScene) {
    case sceneState.INTRO:
    if (keyOn){
      setUpScene(currentState);
    }
      break;
    case sceneState.TEXT:
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
//giving it to the function above
function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.TEXT:
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
//      var jsonModel = 'text.json';
//     var loader = new THREE.JSONLoader();

//     //callback function, two functions in the bracket
//     function loadz(geometry, materials) {
//         //BASIC MESH
//         var material = new THREE.MeshNormalMaterial();
//         var mesh = new THREE.Mesh(geometry, material);

//         //adding the 3d obj
//         scene.add(mesh);
//         //lemme know where u at tho
//         console.log(mesh.position);
//          //mesh.position.x = 20;
//          //mesh.position.z = 10;
//          mesh.position.y = 4;
//         //mesh have to be inside of the function.
//     }
// //callback function, two functions in the bracket
//     loader.load(jsonModel, loadz);

 }

 function updateModel2(){
   //Model 
   scene.remove(scene.children[2]);
    // var jsonModel = 'astro.json','class.json','gal.json','box.json';
    var jsonModel = 'class.json';
    var loader = new THREE.JSONLoader();
    //callback function, two functions in the bracket
    function loadz(geometry, materials) {
        //BASIC MESH
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        console.log(mesh.position);
         //mesh.position.x = 20;
         //mesh.position.z = 10;
         mesh.position.y = -10;
        //mesh have to be inside of the function.
    }
//callback function, two functions in the bracket
    loader.load(jsonModel, loadz);
 }

 function updateModel3(){
   //Model 
   scene.remove(scene.children[2]);
    // var jsonModel = 'astro.json','class.json','gal.json','box.json';
    var jsonModel = 'box.json';
    scene.remove(scene.children[2]);
    var loader = new THREE.JSONLoader();

    //callback function, two functions in the bracket
    function loadz(geometry, materials) {
        //BASIC MESH
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        console.log(mesh.position);
        mesh.position.y = -10;
        //mesh have to be inside of the function.
    }
//callback function, two functions in the bracket
    loader.load(jsonModel, loadz);
 }

  function updateModel4(){
    scene.remove(scene.children[2]);
   //Model 
    // var jsonModel = 'astro.json','class.json','gal.json','box.json';
    var jsonModel = 'gal.json';
    scene.remove(scene.children[2]);
    var loader = new THREE.JSONLoader();

    //callback function, two functions in the bracket
    function loadz(geometry, materials) {
        //BASIC MESH
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        console.log(mesh.position);
        mesh.position.y = -10;
        //mesh have to be inside of the function.
    }
//callback function, two functions in the bracket
    loader.load(jsonModel, loadz);
 }

  function updateModel5(){
    scene.remove(scene.children[2]);
   //Model 
    // var jsonModel = 'astro.json','class.json','gal.json','box.json';

    //load json process of------
    var jsonModel = 'box.json';

    //delete
   
    //new loader for new json for model 5
    var loader = new THREE.JSONLoader();

    //callback function, two functions in the bracket

    //during loadz
    function loadz(geometry, materials) {
        //BASIC MESH
        //adding mesh/mesh related
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        console.log(mesh.position);
        mesh.position.y = -10;
        //mesh have to be inside of the function.
    }
//callback function, two functions in the bracket

//call at the same time json function and loadz at the same time.
    loader.load(jsonModel, loadz);
 }

 function Pressed(){
    drawScene(currentState);
    keyOn = true;
    if (currentState < 5){
      currentState ++;
      console.log(currentState);
    //  } else {
    // if (currentState = 2){
    //   console.log(currentState);
    // }
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