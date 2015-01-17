(function () {
    function ConfirmationPopupDemoController($scope, $modal) {
        function initialize() {
            $scope.header = 'This is a sample header.';
            $scope.question = 'Are you sure you saw this sample question?';
            $scope.message = 'It\'s OK if you read this sample message.';
        }

        $scope.open = function(header, question, message) {
            var modal = $modal.open(
                {
                    templateUrl: '../../widgets/ConfirmationPopup.html',
                    controller: 'ConfirmationPopupController',
                    resolve: {
                        options: function() {
                            return {
                                header: header,
                                question: question,
                                message: message
                            }
                        }
                    }
                }
            );
            modal.result.then(function() {
            }, function() {
            });
        };



        initialize();
    }
    angular
        .module('uiux.DemoModule')
        .controller('ConfirmationPopupDemoController', ['$scope', '$modal', ConfirmationPopupDemoController]);
})();
