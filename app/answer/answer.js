app.component('answer', {
    bindings: {
    },

    templateUrl: 'app/answer/answer.html',
    
    controllerAs: '$ctrl',

    controller: [
        '$scope',
    
        function ($scope) {
            this.$onInit = function () {
                this.message = 'answer'
            }

            this.$onDestroy = function () {
                
            }
        },
    ],
}); 