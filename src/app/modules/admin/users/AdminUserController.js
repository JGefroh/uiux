(function () {
    function Controller($scope, $state, UserService, RoleService) {
        function initialize() {
            $scope.operations = {};
            loadUsers();
            loadRoles();
        }

        function loadUsers() {
            UserService.getUsers().then(function(users) {
                $scope.users = users;
            });
        }

        function loadRoles() {
            RoleService.getRoles().then(function(roles) {
                $scope.roles = roles;
            })
        }

        $scope.goTo = function(state) {
            $state.go(state);
        };

        initialize();
    }
    angular
        .module('com.jgefroh.AdminModule')
        .controller('AdminUserController', ['$scope', '$state', 'UserService', 'RoleService', Controller]);
})();
