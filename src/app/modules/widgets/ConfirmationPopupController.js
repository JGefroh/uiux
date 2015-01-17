(function() {
    function ConfirmationPopupController($scope, $modalInstance, options) {
        initialize();
        function initialize() {
            $scope.options = options || {
                header: 'Perform Action',
                question: 'Are you sure you want to perform this action?'
            };
        }

        $scope.confirm = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }
    angular
        .module('com.jgefroh.WidgetModule')
        .controller('ConfirmationPopupController', ['$scope', '$modalInstance', 'options', ConfirmationPopupController]);
})();