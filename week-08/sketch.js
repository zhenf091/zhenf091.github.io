// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 8
// using p5.js DOM functionality with an API
// note this particular API doesn't require an API key
// this code creates ALL html elements in the p5js code. 
// you can do static stuff yourself in the index.html file if you wish.

// this example uses https://dog.ceo/dog-api/

var allBreeds = [];	// used to store all the breeds data from the API request
var breedSelectElement; // gives the user an option to select a breed
var buttonElement; // gives the user a button to press after selecting the breed 
var imgElement;	// the reference to the image element we'll be using to show the doggo
var selectedDoggo; // variable storing the string to the currently selected breed

function setup() {
  noCanvas();

  loadJSON('https://http.cat/100', gotAllBreeds);

  createElement('h1', 'Cats are the best.');
  createElement('h3', 'If you like dogs more than cats then get out.');

  buttonElement = createButton('I wanta cats!!!');
  buttonElement.mousePressed(onButtonPressed);

  breedSelectElement = createSelect();

  createElement('br');
  createElement('br');

  imgElement = createImg('https://http.cat/100');
}

// callback for loading the initial data of all the breeds.
// sets up the select element and its options.
function gotAllBreeds(data) {
	allBreeds = Object.keys(data.message);
	for (var i = 0; i < allBreeds.length; i++) {
		breedSelectElement.option(allBreeds[i]);
	}
	selectedCato = breedSelectElement.value();
	breedSelectElement.changed(selectEvent);
}

// callback for changing the select element, on line 46
function selectEvent() {
	selectedCato = breedSelectElement.value();
	console.log(selectedCato);
}

// callback for pressing the button, and sending a request to the API to give back a picture of the selected breed
function onButtonPressed() {
	loadJSON('https://dog.ceo/api/breed/' + selectedCato + '/images/random', onGotCato);
}

// callback for line 58, when the API request is completed, display the new image and delete the old one.
function onGotCato(data) {
	imgElement.remove();
	imgElement = createImg(data.message);
}