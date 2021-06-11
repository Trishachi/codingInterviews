//AJAX - Asynchronous JS and XML, uses XMLHttpRequest, send and open mmethods.

var data;
var request = new XMLHttpRequest();

request.open("GET", "./assets/data.json"); //prepares the request

//for tracking the returned response
request.onreadystatechange = function () {
  if (request.status === 200 && request.readyState === 4) {
    data = JSON.parse(request.responseText);
    console.log(data);
    console.log(request);
  }
};

request.send(""); //sends the request
