//****second api**************

var data = null;
var xhr = new XMLHttpRequest();
var searchValue = document.getElementById('searchbox').value;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var button = document.getElementById('button');
var newP = document.createElement('p');
var newJ = document.createElement('p');
var newK = document.createElement('p');
var imag1 = document.getElementById('imag1');
var emptyArray = [];
var picsAr = [];

// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {

  if (this.readyState === 4 && xhr.status < 400){
    var rest1 = Math.floor(Math.random(emptyArray)*20);
    console.log(rest1)
    var rest2 = Math.floor(Math.random(emptyArray)*20);
    console.log(rest2)
    var rest3 = Math.floor(Math.random(emptyArray)*20);
    console.log(rest3)
    // console.log(this.responseText);
    var places = JSON.parse(xhr.responseText);
    var pic1 = Math.floor(Math.random(picsAr)*(picsAr.length));
    var pic2 = Math.floor(Math.random(picsAr)*4);
    var pic3 = Math.floor(Math.random(picsAr)*4);
    // newP.innerHTML = places.restaurants[i].restaurant.location.city;
    //       one.appendChild(newP);
    console.table(places);
    // console.log(places.restaurants[0].restaurant.location.city)//correct sytnax in api
      // for(var i=0; i<places.restaurants.length; i++){
    button.addEventListener('click', function(){
      newP.innerHTML = "";
      newJ.innerHTML = "";
      newK.innerHTML = "";
      console.log(places.length * Math.floor(Math.random()));
        if(searchValue === places.restaurants[emptyArray].restaurant.location.city){
          //restaurant randomizer
            newP.innerHTML = places.restaurants[rest1].restaurant.name;
            console.log(newP.innerHTML);
            newJ.innerHTML = places.restaurants[rest2].restaurant.name;
            newK.innerHTML = places.restaurants[rest3].restaurant.name;

            //image randomizer
            imag1.innerHTML += "<img src='./images/" + "'/>";

          }
    })
    //append name
    one.appendChild(newP);
    two.appendChild(newJ);
    three.appendChild(newK);
    //append images

  }
});

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search");
xhr.setRequestHeader("user-key", "57a59ee455f594054dfce92d93f946a9");
xhr.setRequestHeader("authorization", "Basic amRlbWFzdGVyc0Bob3RtYWlsLmNvbTpwYXBlcmJhZw==");
xhr.setRequestHeader("x-requested-with", "text/html");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "a974c264-4d82-dad3-c68c-7755f8c5ab87");

xhr.send(data);

//had to use jquery for this one or wouldn't work
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id="+ searchValue + "&entity_type=city",
  "method": "GET",
  "headers": {
    "user-key": "57a59ee455f594054dfce92d93f946a9",
    "x-requested-with": "text/html",
    "cache-control": "no-cache",
    "postman-token": "723ae512-1724-72a5-fa86-c0f546a67474"
  }
}

$.ajax(settings).done(function (response) {
console.log(respone);



});



$.ajax(setting).done(function(data){
  id = jasonparse.;
  $.ajax(setting).done(function(data2){
    big funcitons here
  })
})
