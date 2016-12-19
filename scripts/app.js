angular.module("ngPortfolio", ['ui.router', '720kb.socialshare'])
	.config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider){
      $urlMatcherFactoryProvider.caseInsensitive(true);

      $stateProvider
        .state('pig-animation', {
          url: '/showcase',
          templateUrl: 'components/pig-animation/pig06.html'
        })
        .state('portfolio', {
        	url: '/portfolio',
        	templateUrl: 'components/portfolio/portfolio04.html'
        })

       $urlRouterProvider.otherwise('/');
    });

/*angular.module("ngPortfolio", []);*/