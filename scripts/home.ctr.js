(function () {
  "use strict";

  angular
    .module("ngPortfolio")

    .controller("homeCtrl", function($scope, $http, candidatesFactory) {
      candidatesFactory.getCandidates().then(function(response) {
        $scope.navneet = response.data;
        console.log("Navneet: ", $scope.navneet);
        $scope.hideSpinner = true;
      })

      /*function w3_open() {
        document.getElementById("menuSidenav").style.display = "block";
      }

      $scope.w3_close = function() {
        document.getElementById("menuSidenav").style.display = "none";
      }

      $scope.sideNavToggle = function() {
        if (document.getElementById("menuSidenav").style.display == "block") {
          $scope.w3_close();
        } else{
          w3_open();
        }
      }*/

      $scope.div = ['Progress Bars', 'Table', 'Pie Chart'];
      $scope.selectedDiv = $scope.div[0];

      // Intializing the filter variable
      $scope.sortColumn = 'experience', // - prefix operator sorts in decending order
      $scope.reverseSort = true;
      
      $scope.sortData = function(column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;

      }

      $scope.getSortClass = function(column) {
        if ($scope.sortColumn == column) {
          return $scope.reverseSort ? 'fa fa-sort-amount-desc' : 'fa fa-sort-amount-asc';
        }
      }

    })

     /*$scope.seconds = 0;
     $scope.minutes = 0;
      var countUp = function() {
        $scope.seconds += 1;
          if ($scope.seconds===60) {
            $scope.minutes += 1;
            $scope.seconds = 0;
          };
        $timeout(countUp, 1000);
      }
      $timeout(countUp, 1000);*/

})();