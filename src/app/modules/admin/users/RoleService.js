(function () {
    function Service($http, $q, $filter) {
        var TEST_DATA_ROLES = [
            {
                id: 1000,
                name: 'Manager',
                description: 'Able to perform actions on behalf of subordinates.',
                permissions: ['Approve Form', 'Reject Form', 'View Reports']
            },
            {
                id: 1001,
                name: 'User',
                description: 'A standard user of this application.',
                permissions: ['Modify Form', 'Submit Form']
            },
            {
                id: 1002,
                name: 'Administrator',
                description: 'A system administrator for this application.',
                permissions: ['Change Permissions', 'Change Roles', 'Schedule Job']
            }
        ];

        this.getRoles = function() {
            var deferred = $q.defer();
            deferred.resolve(TEST_DATA_ROLES);
            return deferred.promise;
        };
    }
    angular
        .module('com.jgefroh.AdminModule')
        .service('RoleService', ['$http', '$q', '$filter', Service]);
})();
