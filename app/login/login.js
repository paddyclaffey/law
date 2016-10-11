app.component('login', {
    bindings: {
    },

    templateUrl: 'app/login/login.html',
    
    controllerAs: '$ctrl',

    controller: [
        '$scope',
    
        function ($scope) {
            this.$onInit = function () {
                this.message = 'login'
            }

            this.$onDestroy = function () {
                
            }
        },
    ],
}); 