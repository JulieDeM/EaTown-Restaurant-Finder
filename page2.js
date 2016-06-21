// var info = null;
//
// var location = new XMLHttpRequest();
// // location.withCredentials = true;
var searchValue2 = document.getElementById('searchbox').value;
//
// location.addEventListener("readystatechange", function () {
//   if (this.readyState === 4 && xhr.status < 400) {
//     console.log(this.responseText);
//     var entI = JSON.parse(location.responseText);
//     console.log(entI);
//     // if(searchValue === null){
//     //   return "Sorry, there are no restaurants for this search!"
//     // }
//   }
// });
//
// location.open("GET", "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query="+ searchValue2);
// location.setRequestHeader("user-key", "57a59ee455f594054dfce92d93f946a9");
// location.setRequestHeader("x-requested-with", "text/html");
// location.setRequestHeader("cache-control", "no-cache");
// location.setRequestHeader("postman-token", "2055bc9a-9b64-f0ce-ab94-fb5ada20587e");
//
// location.send(info);




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
var emptyArray = [];

// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {

  if (this.readyState === 4 && xhr.status < 400){
    // console.log(this.responseText);
    var places = JSON.parse(xhr.responseText);
    var pic1 = Math.floor(Math.random(emptyArray)*4);
    var pic2 = Math.floor(Math.random(emptyArray)*4);
    var pic3 = Math.floor(Math.random(emptyArray)*4);
    // newP.innerHTML = places.restaurants[i].restaurant.location.city;
    //       one.appendChild(newP);
    console.table(places);
    // console.log(places.restaurants[0].restaurant.location.city)//correct sytnax in api
      // for(var i=0; i<places.restaurants.length; i++){
    button.addEventListener('click', function(){
      newP.innerHTML = "";
      newJ.innerHTML = "";
      newK.innerHTML = "";
        // if(searchValue === places.restaurants[pic1].restaurant.location.city){
            newP.innerHTML = places.restaurants[places.restaurants.length * Math.floor(Math.random())].restaurant.name;
            newJ.innerHTML = places.restaurants[places.restaurants.length * Math.floor(Math.random())].restaurant.name;
            newK.innerHTML = places.restaurants[places.restaurants.length * Math.floor(Math.random())].restaurant.name;
            one.appendChild(newP);
            two.appendChild(newJ);
            three.appendChild(newK);
          // }
    })
  }
});

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search&count=60");
xhr.setRequestHeader("user-key", "57a59ee455f594054dfce92d93f946a9");
xhr.setRequestHeader("authorization", "Basic amRlbWFzdGVyc0Bob3RtYWlsLmNvbTpwYXBlcmJhZw==");
xhr.setRequestHeader("x-requested-with", "text/html");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "a974c264-4d82-dad3-c68c-7755f8c5ab87");

xhr.send(data);
