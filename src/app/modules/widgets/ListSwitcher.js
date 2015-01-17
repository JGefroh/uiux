(function() {
    function ListSwitcher() {
        function ListSwitcherController($scope) {

            if (!$scope.rightList) {
                $scope.rightList = [];
            }

            $scope.leftList = [];
            $scope.moveToRight = function(selectedLeftList) {
                if (!selectedLeftList) {
                    return;
                }
                angular.forEach(selectedLeftList, function(selectedObjectLeft, index) {
                    $scope.rightList.push(selectedObjectLeft);
                });
                selectedLeftList.length = 0;
            };

            $scope.moveToLeft = function(selectedRightList) {
                if (!selectedRightList) {
                    return;
                }
                var newRight = [];
                angular.forEach($scope.rightList, function(objectRight, index) {
                    var shouldRemove = false;
                    angular.forEach(selectedRightList, function(selectedObjectRight, index) {
                        if (selectedObjectRight.id === objectRight.id) {
                            shouldRemove = true;
                        }
                    });
                    if (!shouldRemove) {
                        newRight.push(objectRight);
                    }
                });
                $scope.rightList.length = 0;
                $scope.rightList = newRight;
                selectedRightList.length = 0;
            };

            $scope.getUnusedObjects = function() {
                $scope.leftList.length = 0;

                angular.forEach($scope.allOptions, function(option, index) {
                    if (!isInRightList(option)) {
                        $scope.leftList.push(option);
                    }
                });

                return $scope.leftList;
            };

            function isInRightList(object) {
                var isUsed = false;
                angular.forEach($scope.rightList, function(rightObject, index) {
                    if (object.id === rightObject.id) {
                        isUsed = true;
                    }
                });
                return isUsed;
            }
        }

        return {
            restrict: "A",
            scope: {
                allOptions: '=',
                rightList: '=',
                leftLabel: '=?',
                rightLabel: '=?',
                numVisibleInBox: '=',
                labelExpression: '='
            },
            templateUrl: "ListSwitcher.html",
            controller: ['$scope', ListSwitcherController]
        };
    }
    angular
        .module("com.jgefroh.WidgetModule")
        .directive("listSwitcher", ListSwitcher);
})();