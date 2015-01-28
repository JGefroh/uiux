(function() {
    function TreeDirective() {
        function TreeController($scope) {
            if (!$scope.childrenProperty) {
                console.warn("jgTree: Children property is missing - won't be able to build tree.");
            }


            var stateByNode = {};
            $scope.isCollapsed = function(node) {
                var nodeAtIndex = stateByNode[$scope.getValue({node:node})];
                if (nodeAtIndex) {
                    return nodeAtIndex.collapsed;
                }
                else {
                    stateByNode[$scope.getValue({node:node})] = {};
                }
                return true;
            };

            $scope.isSelected = function(node) {
                return $scope.getValue({node:$scope.currentlySelected}) === $scope.getValue({node:node});
            };

            $scope.select = function(node) {
                $scope.currentlySelected = node;
                $scope.onSelect({node: node});
            };

            $scope.toggleCollapse = function(node) {
                stateByNode[$scope.getValue({node:node})].collapsed = !stateByNode[$scope.getValue({node:node})].collapsed ;
                if (stateByNode[$scope.getValue({node:node})].collapsed) {
                    $scope.onCollapse({node: node});
                }
                else {
                    $scope.onExpand({node: node});
                }
            };

            $scope.expand = function(node) {
                stateByNode[$scope.getValue({node:node})].collapsed = false;
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
                currentlySelected: '=',
                childrenProperty: '=',
                getLabel: '&',
                getValue: '&'
            },
            templateUrl: 'jgTree.html',
            controller: ['$scope', TreeController]
        }
    }
    angular
        .module('com.jgefroh.WidgetModule')
        .directive('jgTree', TreeDirective);
})();