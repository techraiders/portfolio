angular.module("ngPortfolio", ['ui.router', '720kb.socialshare'])
	.config(function($urlRouterProvider, $urlMatcherFactoryProvider){
      $urlMatcherFactoryProvider.caseInsensitive(true);

       $urlRouterProvider.otherwise('/');
    });

/*angular.module("ngPortfolio", []);*/