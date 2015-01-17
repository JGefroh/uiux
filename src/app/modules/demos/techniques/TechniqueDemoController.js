(function () {
    function TechniqueDemoController($scope, $timeout) {
        function initialize() {
            $scope.operations = {
            };
        }

        $scope.play = function(section) {
            $scope.startLoading(section);
            $timeout(function() {
               $scope.stopLoading(section);
            }, 2000);
        };

        $scope.startLoading = function(section) {
            $scope.operations[section].isLoading = true;
        };

        $scope.stopLoading = function(section) {
            $scope.operations[section].isLoading = false;
        };



        initialize();
    }
    angular
        .module('uiux.DemoModule')
        .controller('TechniqueDemoController', ['$scope', '$timeout', TechniqueDemoController]);
})();
