(function () {
    function Service($http, $q, $filter) {
        var TEST_DATA_USERS = [
            {
                id: 1000,
                username: 'jgefroh',
                firstName: 'Joseph',
                lastName: 'Gefroh',
                emailAddress: 'joseph.gefroh@gmail.com',
                lastLoginDate: new Date(),
                roles: [
                    {
                        id: 200,
                        name: 'User'
                    },
                    {
                        id: 300,
                        name: 'Administrator'
                    }
                ]
            },
            {
                id: 1001,
                username: 'cmccaroline',
                firstName: 'Caroline',
                lastName: 'McCaroline',
                emailAddress: 'caroline.mccaroline@example.com',
                lastLoginDate: new Date(),
                roles: [
                    {
                        id: 200,
                        name: 'User'
                    },
                    {
                        id: 250,
                        name: 'Manager'
                    }
                ]
            },
            {
                id: 1002,
                username: 'dmcderek',
                firstName: 'Derek',
                lastName: 'McDerek',
                emailAddress: 'derek.mcderek@example.com',
                lastLoginDate: new Date(),
                roles: [
                    {
                        id: 200,
                        name: 'User'
                    }
                ]
            }
        ];

        this.getUsers = function() {
            var deferred = $q.defer();
            deferred.resolve(TEST_DATA_USERS);
            return deferred.promise;
        };
    }
    angular
        .module('com.jgefroh.AdminModule')
        .service('UserService', ['$http', '$q', '$filter', Service]);
})();
