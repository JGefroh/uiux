(function () {
    function LoadingWidgetDemoController($scope, $timeout) {
        function initialize() {
            $scope.operations = {
                inbox: {}
            };

            $scope.fontSize = '2em';
            $scope.message = 'Loading inbox...';
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


        $scope.changeColor = function(section) {
            var color = $scope.operations[section].color;
            if (color === 'danger') {
                color = 'success';
            }
            else if (color === 'success') {
                color = 'warning';
            }
            else if (color === 'warning') {
                color = 'default';
            }
            else if (color === 'default') {
                color = 'info';
            }
            else if (color === 'info') {
                color = 'primary'
            }
            else {
                color = 'danger';
            }
            $scope.operations[section].color = color;
        };


        initialize();
    }
    angular
        .module('uiux.DemoModule')
        .controller('LoadingWidgetDemoController', ['$scope', '$timeout', LoadingWidgetDemoController]);
})();
