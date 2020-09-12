var http = require('http');
const request = require('request');
//create a server object:
http.createServer(function (req, res) {
	let day = new Date().getDate();
	if(primecheck(day)){
		res.setHeader('Content-Type', 'application/json');
		res.write('{"coord":{"lon":139,"lat":35},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":281.52,"feels_like":278.99,"temp_min":280.15,"temp_max":283.71,"pressure":1016,"humidity":93},"wind":{"speed":0.47,"deg":107.538},"clouds":{"all":2},"dt":1560350192,"sys":{"type":3,"id":2019346,"message":0.0065,"country":"JP","sunrise":1560281377,"sunset":1560333478},"timezone":32400,"id":1851632,"name":"Shuzenji","cod":200}');
		res.end();
	}
	else{
		res.setHeader('Content-Type', 'application/json');
		res.write('{"msg":"Date is not prime so no date"}')
		res.end(); 
	}

}).listen(8080); //the server object listens on port 8080


function primecheck(n){
	if (n===1){
		return false;
	} else if(n === 2){
		return true;
	}else {
		for(var x = 2; x < n; x++){
			if(n % x === 0){
				return false;
			}
		}
		return true;  
	}
}
