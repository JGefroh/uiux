(function () {
    function Controller($scope, $state) {
        function initialize() {
            $scope.operations = {};
            loadAlerts();
        }

        function loadAlerts() {
        }

        $scope.goTo = function(state) {
            $state.go(state);
        };

        initialize();
    }
    angular
        .module('com.jgefroh.AdminModule')
        .controller('AdminDashboardController', ['$scope', '$state', Controller]);
})();
