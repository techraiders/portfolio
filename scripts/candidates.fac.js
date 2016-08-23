(function () {
  // body...
  "use strict";
  angular
    .module("ngPortfolio")
    .factory("candidatesFactory", function($http) {
      
      function getCandidates() {
        return $http.get('data/data.json');
      }

      return {
        getCandidates: getCandidates
      }
    });
})();