angular.module("ngPortfolio", ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('stateone', {
        url: '/stateone',
        template: '<h1>State One'
      })
      .state('statetwo', {
        url: '/statetwo',
        template: '<h1>State Two'
      });
  });
