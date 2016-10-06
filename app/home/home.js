app.component('home', {
    bindings: {
    },

    templateUrl: './home/home.html',
    
    controllerAs: '$ctrl',

    controller: [
        '$scope',
    
        function ($scope) {
            this.$onInit = function () {
                this.message = 'home'
            }

            this.$onDestroy = function () {
                
            }
        },
    ],
}); 