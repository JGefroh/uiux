(function () {
    function Controller($scope, $state, ScheduledJobService) {
        function initialize() {
            if ($state.is('admin')) {
                $state.go('admin.dashboard');
            }

            loadNumbers();
        }

        function loadNumbers() {
            ScheduledJobService.getNumberOfFailedJobs().then(function(numberOfFailedJobs) {
                $scope.numberOfFailedJobs = numberOfFailedJobs;
            });
        }

        $scope.getPageTitle = function() {
            return $state.current.data ? $state.current.data.pageTitle : '';
        };

        $scope.goTo = function(state) {
            $state.go(state);
        };

        $scope.isFailure = function(entry) {
            return entry.status === 'Failed';
        };

        $scope.isSuccess = function(entry) {
            return entry.status === 'Success';
        };

        initialize();
    }
    angular
        .module('com.jgefroh.AdminModule')
        .controller('AdminController', ['$scope', '$state', 'ScheduledJobService', Controller]);
})();
