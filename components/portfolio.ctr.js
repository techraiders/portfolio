(function () {
  "use strict";

  angular
    .module("ngPortfolio")
    .controller("summaryCtrl", function($scope, $http) {
      $http.get('data/data.json').then(function(data) {
        $scope.summary = data.data.summary;
      })
    })
    .controller("slidesCtrl", function($scope, $http) {
      $http.get('data/data.json').then(function(response) {
        $scope.images = response.data.slides;
      })
    })
    .controller("servicesCtrl", function($scope, $http) {
      $http.get('data/data.json').then(function(data) {
        $scope.services = data.data.services;
      })
    })
    .controller("skillsCtrl", function($scope, $http) {
      $http.get('data/data.json').then(function(data) {
        $scope.skills = data.data.skills;
      })
    })
    .controller("educationCtrl", function($scope, $http) {
      $http.get('data/data.json').then(function(data) {
        $scope.educations = data.data.educations;
      })
    })
    .controller("trainingsCtrl", function($scope, $http) {
        $http.get('data/data.json').then(function(data) {
          $scope.courses = data.data.trainings;
        })
    })
    .controller("achievementsCtrl", function($scope, $http) {
      $http.get('data/data.json').then(function(data) {
        $scope.achievements = data.data.achievements;
      })
    })
    .controller("experienceCtrl", function($scope, $http) {
        $http.get('data/data.json').then(function(response){
          $scope.experiences = response.data.experiences;
        })
    });
})();