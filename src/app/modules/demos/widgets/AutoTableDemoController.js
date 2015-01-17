(function () {
    function AutoTableDemoController($scope, $window) {
        function initialize() {
            $scope.actions = [
                {
                    text:'Click Here',
                    iconClass: 'fa fa-check',
                    buttonClass: 'btn btn-xs btn-success',
                    onClick: function(object) {
                        $window.alert('You clicked on ' + object.name);
                    }
                }
            ];

            $scope.objectsJson = '[{"name":"Joseph", "sex":"Male", "spirit animal":"Turtle"}' +
            ',{"name":"Caroline", "sex":"Female", "spirit animal":"Sugar Glider"}' +
            ',{"name":"Chris", "sex":"Male", "spirit animal":"Wombat"}]';
            $scope.headersJson = '["name", "spirit animal"]';
            $scope.fieldsJson = '["name", "spirit animal"]';

            $scope.saveJson('objects', $scope.objectsJson);
            $scope.saveJson('headers', $scope.headersJson);
            $scope.saveJson('fields', $scope.fieldsJson);
        }
        $scope.save = function(objectName, value) {
            $scope[objectName] = value;
        };

        $scope.saveJson = function(objectName, jsonValue) {
            $scope[objectName + 'Json'] = jsonValue;
            if (jsonValue && jsonValue.length > 0) {
                $scope[objectName] = angular.fromJson(jsonValue);
            }
            else {
                $scope[objectName] = null;
            }
        };
        initialize();
    }
    angular
        .module('uiux.DemoModule')
        .controller('AutoTableDemoController', ['$scope', '$window', AutoTableDemoController]);
})();
