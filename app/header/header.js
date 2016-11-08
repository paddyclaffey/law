app.component('header', {
    bindings: {
        headerMessage: '@',
    },

    templateUrl: 'app/header/header.html',

    // The controller that handles our component logic
    controller: [
        '$scope', 'loginService', '$location', '$window',
    
        function ($scope, loginService, $location, $window) {
            this.$onInit = function () {
                $scope.loginService = loginService;
            }

            this.$onDestroy = function () {
                
            }

            this.logOut = function () {
                loginService.logOut();
                if ($location.url().match(/profile/g).length > 0) {
                    $window.location.href = '#/login';
                }
                
            };

            $scope.$watch('loginService.isUserLogged()', function(newVal) {
                this.userDetails = newVal;
                $scope.controllerData = newVal;
            }.bind(this));
        },
    ],
    controllerAs: '$ctrl',
});