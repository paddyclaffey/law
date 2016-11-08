app.component('profile',
{
    bindings: {
    },

    templateUrl: 'app/profile/profile.html',
    
    controllerAs: '$ctrl',

    controller: [
        '$scope', 'loginService', '$window',
    
        function ($scope, loginService, $window) {
            this.$onInit = function () {
                if (!loginService.isUserLogged()) {
                    $window.location.href = '#/login';
                    return;
                }

                this.userDetails = loginService.isUserLogged();
            }

            this.$onDestroy = function () {
                
            }
        },
    ],
});
