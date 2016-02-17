'use strict';

/* Module */
var weatherApp = angular.module('weatherApp', []);

/* Controllers */
weatherApp.controller('WeatherCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.userInput = "Gaithersburg";
  var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + $scope.userInput + ',us&mode=json&appid=44db6a862fba0b067b1930da0d769e98';
  $http.get(url)
    .then(function(data) {
      $scope.userInput = "Gaithersburg";
      $scope.date = data.data.list[0].dt;
      $scope.description = data.data.list[0].weather[0].description;
      var temp = data.data.list[0].main.temp;
      $scope.mainTemp = Math.floor(temp * (9/5) - 460);
    }, function(errMsg){
      console.log(errMsg);
  });

  // ng-submit: repeat $http call
  // refactor note: remove repetition!
  $scope.submit = function() {
    url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + $scope.userInput + ',us&mode=json&appid=44db6a862fba0b067b1930da0d769e98';
    $http.get(url)
      .then(function(data) {
        $scope.date = data.data.list[0].dt;
        $scope.description = data.data.list[0].weather[0].description;
        var temp = data.data.list[0].main.temp;
        $scope.mainTemp = Math.floor(temp * (9/5) - 460);
      }, function(errMsg){
        console.log(errMsg);
    });
  };
}]);

/* Next Steps */
// Add 5-day forecast
// Add weather condition icons
// Add better search functionality