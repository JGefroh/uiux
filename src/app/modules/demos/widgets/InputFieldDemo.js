(function () {
    function Controller($scope, $timeout) {
        function initialize() {
            $scope.operations = {
            };
        }
        initialize();
    }
    angular
        .module('uiux.DemoModule')
        .controller('InputFieldDemoController', ['$scope', '$timeout', Controller]);
})();
