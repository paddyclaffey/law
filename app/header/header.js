app.component('header', {
    bindings: {
        headerMessage: '@',
    },

    templateUrl: 'app/header/header.html',

    // The controller that handles our component logic
    controller: [
        '$scope',
    
        function ($scope) {
            this.$onInit = function () {
                
            }

            this.$onDestroy = function () {
                
            }
        },
    ],
    controllerAs: '$ctrl',
});