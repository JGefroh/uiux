(function() {
    function LoadingIndicatorDirective() {
        function LoadingIndicatorController($scope) {
        }
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                message: '=',
                isLoading: '='
            },
            templateUrl: 'LoadingIndicator.html',
            controller: ['$scope', LoadingIndicatorController]
        }
    }
    angular
        .module('com.jgefroh.WidgetModule')
        .directive('loadingIndicator', LoadingIndicatorDirective);
})();