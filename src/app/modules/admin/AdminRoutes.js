(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'AdminView.html',
                controller: 'AdminController',
                data: {
                    pageTitle: 'Admin'
                }
            })
            .state('admin.dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/AdminDashboardView.html',
                controller: 'AdminDashboardController',
                data: {
                    pageTitle: 'Admin - Dashboard'
                }
            })
            .state('admin.jobs', {
                url: '/jobs',
                templateUrl: 'jobs/AdminJobView.html',
                controller: 'AdminJobController',
                data: {
                    pageTitle: 'Admin - Scheduled Jobs',
                    cssUrl: 'modules/admin/jobs/jobs.css'
                }
            })
            .state('admin.users', {
                url: '/users',
                templateUrl: 'users/AdminUserView.html',
                controller: 'AdminUserController',
                data: {
                    pageTitle: 'Admin - Users'
                }
            });
    }
    angular
        .module('com.jgefroh.AdminModule')
        .config(['$stateProvider', '$urlRouterProvider', Routes]);
})();
