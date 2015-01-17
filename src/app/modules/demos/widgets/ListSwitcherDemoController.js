(function () {
    function ListSwitcherDemoController($scope) {
        function initialize() {
            $scope.allOptions = [

            ];
            $scope.save('numVisibleInBox', 15);
            $scope.save('rightLabel', 'Food I Like');
            $scope.save('leftLabel', 'All Foods');
            $scope.saveJson('allOptions', '[' +
            '{"id":"0", "name":"Potato", "description":"A tuberous starch."}' +
            ',{"id":"1", "name":"Apple", "description":"A delicious fruit."}' +
            ',{"id":"2", "name":"Spinach", "description":"A green leafy plant."}' +
            ',{"id":"3", "name":"Lettuce", "description":"A round leafy plant."}' +
            ',{"id":"4", "name":"Beef", "description":"A cow."}' +
            ',{"id":"5", "name":"Pork", "description":"A pig."}' +
            ',{"id":"6", "name":"Chicken", "description":"Tastes like chicken."}' +
            ',{"id":"7", "name":"Egg", "description":"Also takes like chicken."}' +
            ',{"id":"8", "name":"Rice", "description":"A delicious grain."}' +
            ',{"id":"9", "name":"Curry", "description":"A spicy stew."}' +
            ',{"id":"10", "name":"Stew", "description":"A more solid soup."}' +
            ',{"id":"11", "name":"Soup", "description":"A more liquid stew."}' +
            ']');
            $scope.saveJson('rightList', []);
            $scope.save('labelExpression', '(option.name + \' - \' + option.description)');
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
        .controller('ListSwitcherDemoController', ['$scope', ListSwitcherDemoController]);
})();
