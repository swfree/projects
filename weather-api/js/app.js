$(document).ready(function(){
  var updateWeather = function(event) {    
    var location = event.data.locale.val();
    var outputList = $(this).closest("div.row").next();
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var appID = '&mode=json&appid=44db6a862fba0b067b1930da0d769e98';
    var city = location;
    var country = 'us';
    var description = '';
    var temperature;

    url = url + city + ',' + country + appID;

    // contact API for updated weather
    $.getJSON(url, function(data){
      var time = data.list[0].dt;
      var date = new Date(time*1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var month = months[date.getMonth()];
      var day = date.getDate();
      var formattedTime = day + ' ' + month + ' ' + hours + ':' + minutes.substr(-2);

      description = data.list[0].weather[0].description;
      temperature = data.list[0].main.temp;
      temperature = Math.floor(temperature*(9/5) - 460);

      // put inside callback
      outputList.find("li#location").html(location);
      outputList.find("li#time").html(formattedTime);
      outputList.find("span.temp").html('&nbsp;' + temperature + '&nbsp;F');
      outputList.find("li#description").html(description);
    });

    // Change webpage after user input
    //outputList.find("li#location").html(location);
    //outputList.find("li.temp").html(temperature);
    //outputList.find("li#description").html(description);
    // outputList.find("li#time").html(current time);
    // outputList.find("li#date").html(current date);
    // etc

    event.preventDefault();
  };

  $("form").on("submit", {
    locale: $(this).find("input:text")
  }, updateWeather);

});

// Learn to use APIs
//{"_id":2192362,"name":"Christchurch","country":"NZ","coord":{"lon":172.633331,"lat":-43.533329}}


// OpenWeatherMap:
  // example API call by city name:
    // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
    // api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
  // example API call by city id (recommended):
    // city id list: http://bulk.openweathermap.org/sample/
    // api.openweathermap.org/data/2.5/forecast?id=524901

  // returns json object:
    // object.list.dt = time of data forecast (unix UTC - secs since 1/1/1970)
    // object.list.main.temp = current temp in Kelvin
    // object.list.weather.main || weather.description
    //
    // object.main.temp_min
    // object.main.temp_max
    //
    // if you want to input the conditions icon:
      // http://openweathermap.org/img/w/10d.png
      // object.list.weather.icon <<< i.e. 10d or 11n etc.

/* 
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.codecademy.com/", false);
  // Add your code below!
  xhr.send();
  console.log(xhr.status);
  console.log(xhr.statusText);
*/