app.component('footer', {
    bindings: {},

    templateUrl: 'app/footer/footer.html',
    
    controllerAs: '$ctrl',

    controller: [
        '$scope',
    
        function ($scope) {
            this.$onInit = function () {
                this.message = '© Tom McShane 2016';
            }

            this.$onDestroy = function () {
                
            }
        },
    ],
}); 