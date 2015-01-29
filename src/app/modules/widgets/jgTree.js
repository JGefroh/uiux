(function() {
    function TreeDirective() {
        function TreeController($scope) {
            if (!$scope.childrenProperty) {
                console.warn("jgTree: Children property is missing - won't be able to build tree.");
            }

            var stateByNode = {};
            stateByNode[$scope.getValue({node:$scope.node})] = {};
            $scope.node = {
                label: $scope.tree.label,
                value: $scope.tree.value,
                children: [$scope.tree]
            };

            $scope.isCollapsed = function(node) {
                if (!node) {
                    return true;
                }
                var nodeState = stateByNode[$scope.getValue({node:node})];
                if (nodeState) {
                    return nodeState.collapsed;
                }
                else {
                    stateByNode[$scope.getValue({node:node})] = {
                        collapsed : false,
                        value: $scope.getValue({node:node})
                    };
                    return stateByNode[$scope.getValue({node:node})].collapsed;
                }
            };

            $scope.isRoot = function(node) {
                return $scope.getValue({node:node}) === $scope.getValue({node:$scope.node});
            };
            $scope.isSelected = function(node) {
                return $scope.getValue({node:$scope.currentlySelected}) === $scope.getValue({node:node});
            };

            $scope.select = function(node) {
                $scope.currentlySelected = node;
                $scope.onSelect({node: node});
            };

            $scope.toggleCollapse = function(node) {
                var nodeState = stateByNode[$scope.getValue({node:node})];
                if (nodeState) {
                    nodeState.collapsed = !nodeState.collapsed ;
                }
                if (nodeState && nodeState.collapsed) {
                    $scope.onCollapse({node: node});
                }
                else if (nodeState && !nodeState.collapsed) {
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
                tree: '=',
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