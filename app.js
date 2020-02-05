const request = require('request');
const bodyParser = require('body-parser');
let apiKey = 'e6ed18e05e290c3309180387005e4ee5';

let url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid='+apiKey;

request(url,function(err, response, body){
	if(err){
		console.log("Error=======",err)
	}else{
		let weather = JSON.parse(body)
		console.log("It's "+weather.main.temp+" in "+weather.name)
	}
})
