(function () {
  "use strict";

  angular
    .module("ngPortfolio")
    .controller("summaryCtrl", function($scope, $http) {
      $http.get('data/data.json').then(function(data) {
        $scope.summary = data.data.summary;
      })
    })
    .controller("servicesCtrl", function($scope, $http) {
      $http.get('data/data.json').then(function(data) {
        $scope.services = data.data.services;
      })
    })
    .controller("trainingsCtrl", function($scope, $http) {
        $http.get('data/data.json').then(function(data) {
          $scope.courses = data.data.trainings;
        })
    });
})();