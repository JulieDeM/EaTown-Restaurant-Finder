$(document).ready(function() {

  var city = window.location.search.split('=')[1];
  var allRestaurantButton = document.getElementById('allRestaurantButton');
  var searchboxAll = document.getElementById('searchboxAll');
  var imag1 = document.getElementById('imag1');
  var emptyArray = [];
  var picsAr = [];
  var arr = [];
  // var count = 0;
  // count+20;
  //
  //
  //     var buttonCount = document.getElementById("countButton");
      // var display = document.getElementById("displayCount");
//   incrementCount() {
//   count++;
// }
  var restaurantPostmanToken = "723ae512-1724-72a5-fa86-c0f546a67474"
  var cityPostmanToken = "0e497155-5063-2f93-05b6-f45c867ebb21"
  var queryObject = {
    "async": true,
    "crossDomain": true,
    "method": "GET",
    "headers": {
      "user-key": "57a59ee455f594054dfce92d93f946a9",
      "x-requested-with": "text/html",
      "cache-control": "no-cache",
    }
  }


allRestaurantButton.addEventListener('click', function(){
  var cityQueryUrl = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query=" + searchboxAll.value + "&start=" +
  cityQuery = queryObject;
  cityQuery.headers["postman-token"] = cityPostmanToken;
  cityQuery.url = cityQueryUrl;

  $.ajax(cityQuery).done(function(response) {
      var entity_id= response.location_suggestions[arr.length].entity_id
      var restaurantsUrl = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=" + entity_id + "&entity_type=city";
      var restaurantsQuery = queryObject;
      restaurantsQuery.headers["postman-token"] = restaurantPostmanToken;
      restaurantsQuery.url = restaurantsUrl;

      $.ajax(restaurantsQuery).done(function(places){
        console.log(places);
        newP.innerHTML = "";
        newJ.innerHTML = "";
        newK.innerHTML = "";
        console.log(places.length * Math.floor(Math.random()));
        var rest1 = Math.floor(Math.random(emptyArray)*20);
        console.log(rest1)
        var rest2 = Math.floor(Math.random(emptyArray)*20);
        console.log(rest2)
        var rest3 = Math.floor(Math.random(emptyArray)*20);
        console.log(rest3)
            //restaurant randomizer
            //restaurant1
        newP.innerHTML = places.restaurants[rest1].restaurant.name;
        cost1.innerHTML = "Average Cost for Two People:  " + places.restaurants[rest1].restaurant.currency + places.restaurants[rest1].restaurant.average_cost_for_two;
        cuisines1.innerHTML = "Cuisine Types: " + places.restaurants[rest1].restaurant.cuisines;
        userRat1.innerHTML = "User Rating: " + places.restaurants[rest1].restaurant.user_rating.aggregate_rating;
        location1.innerHTML = "Address: " + places.restaurants[rest1].restaurant.location.address;
        menu1.innerHTML = "View the Menu"


        //restaurant2
        console.log(newP.innerHTML);
        newJ.innerHTML = places.restaurants[rest2].restaurant.name;
        cost2.innerHTML = "Average Cost for Two People:  " + places.restaurants[rest2].restaurant.currency + places.restaurants[rest2].restaurant.average_cost_for_two;
        cuisines2.innerHTML = "Cuisine Types: " + places.restaurants[rest2].restaurant.cuisines;
        userRat2.innerHTML = "User Rating: " + places.restaurants[rest2].restaurant.user_rating.aggregate_rating;
        location2.innerHTML = "Address: " + places.restaurants[rest2].restaurant.location.address;


        //restaurant3
        newK.innerHTML = places.restaurants[rest3].restaurant.name;
        cost3.innerHTML = "Average Cost for Two People:  " + places.restaurants[rest3].restaurant.currency + places.restaurants[rest3].restaurant.average_cost_for_two;
        cuisines3.innerHTML = "Cuisine Types: " + places.restaurants[rest3].restaurant.cuisines;
        userRat3.innerHTML = "User Rating: " + places.restaurants[rest3].restaurant.user_rating.aggregate_rating;

        //
        // var pic1 = Math.floor(Math.random(picsAr)*(picsAr.length));
        // var pic2 = Math.floor(Math.random(picsAr)*4);
        // var pic3 = Math.floor(Math.random(picsAr)*4);
        //
        //     //image randomizer
        // imag1.innerHTML += "<img src='./Images/" + pic2 + "'/>";

      })
      one.appendChild(newP);
      two.appendChild(newJ);
      three.appendChild(newK);
      avgCost1.appendChild(cost1);
      avgCost2.appendChild(cost2);
      avgCost3.appendChild(cost3);
      cuisines1.appendChild(cuisOne);
      cuisines2.appendChild(cuisTwo);
      cuisines3.appendChild(cuisThree);
      userRat1.appendChild(userROne);
      userRat2.appendChild(userRTwo);
      userRat3.appendChild(userRThree);
      location2.appendChild(locationTwo);
  })

});
$(allRestaurantButton).trigger("click");

})
