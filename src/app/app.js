(function() {
    angular
        .module('uiux',
        [
            'ngAnimate',
            'ngResource',
            'ngSanitize',
            'ui.bootstrap',
            'ui.router',
            'com.jgefroh.WidgetModule',
            'com.jgefroh.AdminModule',
            'uiux.NavigationModule',
            'uiux.RoutesModule',
            'uiux.DemoModule',
            'uiux.SplashModule'
        ]);
    angular
        .module('uiux')
        .constant('applicationName', 'UI/UX')
        .constant('versionNumber', 'v0.0.1');
})();

(function () {
    function AppController ($rootScope, $state, $scope, baseImagePath) {
        $rootScope.baseImagePath = baseImagePath;

        $scope.getPageTitle = function() {
            if (!$state.current.data) {
                return null;
            }
            var pageSection = $state.current.data.pageSection ? ' - ' + $state.current.data.pageSection : '';
            return $state.current.data.pageTitle + pageSection;
        };

        $scope.getCSSUrl = function() {
            if (!$state.current.data) {
                return null;
            }
            return $state.current.data.cssUrl;
        }
    }

    angular
        .module('uiux')
        .controller('AppController', ['$rootScope', '$state', '$scope', AppController]);
})();
