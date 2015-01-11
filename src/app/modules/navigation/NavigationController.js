/**
 * @author: Joseph Gefroh
 */
(function() {
    function NavigationController($scope, $location, applicationName, versionNumber) {
        $scope.applicationName = applicationName;
        $scope.versionNumber = versionNumber;
        $scope.isActive = function(route) {
            return $location.path() === route || $location.path().indexOf(route) === 0;
        };
    }
    angular
        .module('uiux.NavigationModule', [])
        .controller('NavigationController', ['$scope', '$location', 'applicationName', 'versionNumber', NavigationController]);
})();