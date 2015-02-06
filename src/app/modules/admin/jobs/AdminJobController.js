(function () {
    function Controller($scope, $state, ScheduledJobService) {
        function initialize() {
            $scope.operations = {};
            loadJobHistory();
            loadUpcomingJobs();
        }

        function loadJobHistory() {
            ScheduledJobService.getJobHistory().then(function(history) {
                $scope.history = history;
            });
        }

        function loadUpcomingJobs() {
            ScheduledJobService.getUpcomingJobs().then(function(jobs) {
                $scope.upcomingJobs = jobs;
            });
        }

        $scope.goTo = function(state) {
            $state.go(state);
        };

        initialize();
    }
    angular
        .module('com.jgefroh.AdminModule')
        .controller('AdminJobController', ['$scope', '$state', 'ScheduledJobService', Controller]);
})();
