(function () {
    function Service($http, $q, $filter) {
        var TEST_DATA_JOB_HISTORY = [
            {
                id: 1000,
                job: {
                    id: 41,
                    name: 'Late Submission Notification Job',
                    description: 'Sends late submission notification emails to users whose submissions are overdue.'
                },
                startDate: new Date(),
                endDate: new Date(),
                status: 'Success',
                notes: 'Sent 32 late submission notification emails.'
            },
            {
                id: 1001,
                job: {
                    id: 44,
                    name: 'Record Backup',
                    description: 'Pushes the day\'s data changes to off-site backup servers.'
                },
                startDate: new Date(),
                endDate: new Date(),
                status: 'Failed',
                notes: 'Unable to contact the backup server.'
            }
        ];

        var TEST_DATA_UPCOMING= [
            {
                id: 1000,
                job: {
                    id: 41,
                    name: 'Late Submission Notification Job',
                    description: 'Sends late submission notification emails to users whose submissions are overdue.'
                },
                scheduledDate: new Date(),
                lastRanDate: new Date(2014, 1, 2)
            },
            {
                id: 1001,
                job: {
                    id: 44,
                    name: 'Record Backup',
                    description: 'Pushes the day\'s data changes to off-site backup servers.'
                },
                scheduledDate: new Date(),
                lastRanDate: new Date(2014, 1, 2)
            }
        ];

        this.getJobHistory = function() {
            var deferred = $q.defer();
            deferred.resolve(TEST_DATA_JOB_HISTORY);
            return deferred.promise;
        };

        this.getUpcomingJobs = function() {
            var deferred = $q.defer();
            deferred.resolve(TEST_DATA_UPCOMING);
            return deferred.promise;
        };

        this.getNumberOfFailedJobs = function() {
            var deferred = $q.defer();
            deferred.resolve(($filter('filter')(TEST_DATA_JOB_HISTORY, {status: 'Failed'})).length);
            return deferred.promise;
        }
    }
    angular
        .module('com.jgefroh.AdminModule')
        .service('ScheduledJobService', ['$http', '$q', '$filter', Service]);
})();
