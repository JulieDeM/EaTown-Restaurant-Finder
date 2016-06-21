var data = null;
var newP = document.createElement('p');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var searchValue = document.getElementById('id')

var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && xhr.status < 400) {
    // console.log(this.responseText);
    var places = JSON.parse(xhr.responseText);
    // console.table(places);
    // console.log(places.restaurants[0].restaurant.location.city)//correct sytnax in api
      for(var i=0; i< places.length; i++){
          if(searchValue === places.restaurants[i].restaurant.location.city){
            newP.innerHTML = "hello";
            newP.innerHTML = "bye";
            one.appendChild(newP);
          }
        else{

      }
    }
  }
});

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search");
xhr.setRequestHeader("user-key", "57a59ee455f594054dfce92d93f946a9");
xhr.setRequestHeader("authorization", "Basic amRlbWFzdGVyc0Bob3RtYWlsLmNvbTpwYXBlcmJhZw==");
xhr.setRequestHeader("x-requested-with", "text/html");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "a974c264-4d82-dad3-c68c-7755f8c5ab87");

xhr.send(data);


// for(var i=0; i< places.length; i++){
//   if(searchValue === places.restaurants[0].restaurant.location.city){
//     newP.innerHTML = 3;
//     one.appendChild(newP);
//   }
// }
