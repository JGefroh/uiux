(function () {
    function SplashController($scope, $state) {
        function initialize() {
            $scope.operations = {};
        }

        $scope.goTo = function(state) {
            $state.go(state);
        };

        initialize();
    }
    angular
        .module('uiux.SplashModule')
        .controller('SplashController', ['$scope', '$state', SplashController]);
})();
