app.component('login', {
    bindings: {
    },

    templateUrl: './login/login.html',
    
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