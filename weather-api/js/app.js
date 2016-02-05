$(document).ready(function(){
  var updateWeather = function(event) {    
    var location = event.data.locale.val();
    var outputList = $(this).closest("div.row").next();
    outputList.find("li#location").html(location);

    // outputList.find("li#time").html(current time);
    // outputList.find("li#date").html(current date);
    // etc
    
    event.preventDefault();
  };

  $("form").on("submit", {
    locale: $(this).find("input:text")
  }, updateWeather);

});