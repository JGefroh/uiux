(function () {
    function TreeDemoController($scope, $timeout) {
        function initialize() {
            $scope.currentlySelected =
            {
                label: 'Child_1_1',
                value: 11,
                children: [
                    {
                        value: 111,
                        label: 'Child_1_1_1'
                    },
                    {
                        value: 112,
                        label: 'Child_1_2_2'
                    },
                    {
                        value: 113,
                        label: 'Child_1_3_3'
                    }
                ]
            };
            $scope.tree = {
                label: 'Root',
                value: 0,
                children: [
                    {
                        label: 'Child_1',
                        value: 1,
                        children: [
                            $scope.currentlySelected,
                            {
                                value: 12,
                                label: 'Child_1_2'
                            },
                            {
                                value: 13,
                                label: 'Child_1_3'
                            }
                        ]
                    },
                    {
                        label: 'Child_2',
                        value: 2,
                        children: [
                            {
                                value: 21,
                                label: 'Child_2_1'
                            },
                            {
                                value: 22,
                                label: 'Child_2_2'
                            },
                            {
                                value: 23,
                                label: 'Child_2_3'
                            }
                        ]
                    },
                    {
                        label: 'Child_3',
                        value: 3
                    },
                    {
                        label: 'Child_4',
                        value: 4
                    }
                ]
            };
        }

        initialize();


        $scope.onExpand = function(node) {
            $scope.lastEvent = node.label + ' expanded.';
        };
        $scope.onCollapse = function(node) {
            $scope.lastEvent = node.label + ' collapsed.';
        };
        $scope.onSelect = function(node) {
            $scope.lastEvent = node.label + ' selected.';
        }
    }
    angular
        .module('uiux.DemoModule')
        .controller('TreeDemoController', ['$scope', '$timeout', TreeDemoController]);
})();
