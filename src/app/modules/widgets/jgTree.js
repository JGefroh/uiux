(function() {
    function TreeDirective() {
        function TreeController($scope) {
            if (!$scope.onExpand) {
                $scope.onExpand = function(node) {
                }
            }

            if (!$scope.onSelect) {
                $scope.onSelect = function(node) {
                }
            }

            if (!$scope.onCollapse) {
                $scope.onCollapse = function(node) {
                }
            }

            var stateByNode = {};
            $scope.isCollapsed = function(node) {
                if (stateByNode[node.value]) {
                    return stateByNode[node.value].collapsed;
                }
                else {
                    stateByNode[node.value] = {};
                }
                return true;
            };

            $scope.isSelected = function(node) {
                return $scope.currentlySelected.value === node.value;
            };

            $scope.select = function(node) {
                $scope.currentlySelected = node;
                $scope.onSelect({node: node});
            };

            $scope.toggleCollapse = function(node) {
                stateByNode[node.value].collapsed = !stateByNode[node.value].collapsed ;
                if (stateByNode[node.value].collapsed) {
                    $scope.onCollapse({node: node});
                }
                else {
                    $scope.onExpand({node: node});
                }
            };

            $scope.expand = function(node) {
                stateByNode[node.value].collapsed = false;
            };
        }
        return {
            restrict: 'A',
            scope: {
                node: '=',
                onExpand: '&',
                onCollapse: '&',
                onSelect: '&',
                leafIconClass: '@',
                expandIconClass: '@',
                collapseIconClass: '@',
                currentlySelected: '='
            },
            templateUrl: 'jgTree.html',
            controller: ['$scope', TreeController]
        }
    }
    angular
        .module('com.jgefroh.WidgetModule')
        .directive('jgTree', TreeDirective);
})();