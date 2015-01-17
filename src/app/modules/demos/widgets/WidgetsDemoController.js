(function () {
    function WidgetsDemoController($scope, $timeout) {
        function initialize() {
            $scope.operations = {
            };
        }


        initialize();
    }
    angular
        .module('uiux.DemoModule')
        .controller('WidgetsDemoController', ['$scope', '$timeout', WidgetsDemoController]);
})();
