var weather;

function setup(){
	createCanvas(800,800);
	loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=f6bb96f9cf44837394a4502cb700e06f",gotData,'jsonp');
}

function gotData(data){
	weather = data;

}

function draw(){
	background(0);
	if (weather){
		ellipse(100,100,weather.main.temp,weather.main.temp);
		ellipse(100,100,weather.main.humidity,weather.main.humidity);
		ellipse(100,100,weather.wind.speed,weather.wind.speed);
		ellipse(100,100,weather.wind.deg,weather.wind.deg);
		ellipse(100,100,sys.id,sys.id);
	}
	}
