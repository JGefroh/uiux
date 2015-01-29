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
                        parent: {value: 0},
                        children: [
                            $scope.currentlySelected,
                            {
                                value: 12,
                                parent: {value: 1},
                                label: 'Child_1_2'
                            },
                            {
                                value: 13,
                                parent: {value: 1},
                                label: 'Child_1_3'
                            }
                        ]
                    },
                    {
                        label: 'Child_A',
                        value: 2,
                        children: [
                            {
                                value: 21,
                                label: 'Child_B',
                                children: [
                                    {
                                        value: 211,
                                        label: 'Child_C',
                                        children: [
                                            {
                                                value: 2111,
                                                label: 'Child_D',
                                                children: [
                                                    {
                                                        value: 3111,
                                                        label: 'Child_E',
                                                        children: [
                                                            {
                                                                value: 4111,
                                                                label: 'Child_F',
                                                                children: [
                                                                    {
                                                                        value: 5111,
                                                                        label: 'Child_G',
                                                                        children: [
                                                                            {
                                                                                value: 6111,
                                                                                label: 'Child_H',
                                                                                children: [
                                                                                    {
                                                                                        value: 7111,
                                                                                        label: 'Child_J'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                value: 22,
                                label: 'Child_A_A'
                            },
                            {
                                value: 23,
                                label: 'Child_A_B'
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

        $scope.jgTreeHandle = {};

        initialize();


        $scope.onExpand = function(node) {
            $scope.lastEvent = node.label + ' expanded.';
        };
        $scope.onCollapse = function(node) {
            $scope.lastEvent = node.label + ' collapsed.';
        };
        $scope.onSelect = function(node) {
            $scope.lastEvent = node.label + ' selected.';
        };
        $scope.getLabel = function(node) {
            if (node) {
                return node.label;
            }
            return node.label;
        };
        $scope.getValue = function(node) {
            if (node) {
                return node.value;
            }
        };
    }
    angular
        .module('uiux.DemoModule')
        .controller('TreeDemoController', ['$scope', '$timeout', TreeDemoController]);
})();
