(function () {
    function DemoController($scope, $state) {
        function initialize() {
            $scope.operations = {};
        }

        $scope.goTo = function(state) {
            $state.go(state);
        };

        initialize();
    }
    angular
        .module('uiux.DemoModule')
        .controller('DemoController', ['$scope', '$state', DemoController]);
})();
