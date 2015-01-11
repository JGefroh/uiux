(function() {
    function Routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                redirectTo: 'demo'
            })
            .state('splash', {
                url: '/splash',
                templateUrl: 'modules/splash/SplashView.html',
                controller: 'SplashController'
            })
            .state('demo', {
                url: '/demo',
                templateUrl: 'modules/demos/DemoView.html',
                controller: 'DemoController'
            })
            .state('demo.loading', {
                url: '/loading',
                templateUrl: 'modules/demos/loading/LoadingDemoView.html',
                controller: 'LoadingDemoController'
            })
            .state('demo.buttons', {
                url: '/buttons',
                templateUrl: 'modules/demos/buttons/ButtonDemoView.html',
                controller: 'ButtonDemoController'
            })
            .state('demo.forms', {
                url: '/forms',
                templateUrl: 'modules/demos/forms/FormDemoView.html',
                controller: 'FormDemoController'
            });
            $urlRouterProvider.when('', '/splash'); //[JG]: Default page to splash when accessing for first time.
    }
    angular
        .module('uiux.RoutesModule', [])
        .config(['$stateProvider', '$urlRouterProvider', Routes]);
})();