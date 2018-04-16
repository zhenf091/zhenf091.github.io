var spaceData;

function setup(){
	createCanvas(800,800);
	loadJSON("http://api.open-notify.org/astros.json",gotData,'jsonp');
}

function gotData(data){
	spaceData = data;

}

function draw(){
	background(0,32,134);
	if (spaceData){
	  randomSeed(4);
	  for (var i = 0, i < spaceData.number; i++){
		fill(31,54,129);
		elllipse(random(width),random(height),20,20);
	}
}
	stroke(123,231,34);
	line(x, 0, x, height);
	x = x + 1;
	if (x > width){
		x = 0;
	}
