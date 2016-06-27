
var data = null;
var searchValue = document.getElementById('searchbox');
var newP = document.createElement('p');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var generate3 = document.getElementById('generate3');

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && xhr.status < 400) {
    var places = JSON.parse(xhr.responseText);
  }
});

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search");
xhr.setRequestHeader("user-key", "57a59ee455f594054dfce92d93f946a9");
xhr.setRequestHeader("x-requested-with", "text/html");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "a974c264-4d82-dad3-c68c-7755f8c5ab87");

xhr.send(data);

//*******************CITY IMAGES BELOW*******************
var show3 = document.getElementById('generate3');//generates 3 by clicking button
var newR = document.createElement('p'); //creates a new p for 3 random restaurants
//images of cities
var denver = document.getElementById('one');
var chicago = document.getElementById('two');
var newyork = document.getElementById('three');
var austin = document.getElementById('four');
var losangeles = document.getElementById('five');
var boston = document.getElementById('six');
var count = (count+20);

show3.addEventListener("click",function(Sear){
  Sear.preventDefault();
  window.location="indexpage2.html?city=" + document.getElementById('searchbox').value;
  var inO = window.location.search.indexOf("=");
  var splO = window.location.search.splice(in0);
});
denver.addEventListener("click", function(event){
  event.preventDefault();
  console.log("heyyyy");
  window.location="indexpage2.html?city=denver";
  var inO = window.location.search.indexOf("=");
});
chicago.addEventListener("click", function(event){
  event.preventDefault();
  window.location="indexpage2.html?city=chicago";
  var inO = window.location.search.indexOf("=");
});
newyork.addEventListener("click", function(event){
  event.preventDefault();
  window.location="indexpage2.html?city=newyorkcity";
  var inO = window.location.search.indexOf("=");
});
austin.addEventListener("click", function(event){
  event.preventDefault();
  window.location="indexpage2.html?city=austin";
  var inO = window.location.search.indexOf("=");
});
losangeles.addEventListener("click", function(event){
  event.preventDefault();
  window.location="indexpage2.html?city=losangeles";
  var inO = window.location.search.indexOf("=");
});
boston.addEventListener("click", function(event){
  event.preventDefault();
  window.location="indexpage2.html?city=boston";
  var inO = window.location.search.indexOf("=");
});
