var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://developers.zomato.com/api/v2.1/search",
  "method": "GET",
  "headers": {
    "user-key": "57a59ee455f594054dfce92d93f946a9",
    "cache-control": "no-cache",
    "postman-token": "b5b00c13-7fa2-b094-6b82-b81fc9ed962f"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
