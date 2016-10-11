app.component('loader', {
    bindings: {
        isLoading: '=',
    },

    templateUrl: 'app/common/components/loader/loader.html',

    controllerAs: '$ctrl',

    controller: [
        '$scope',
    
        function ($scope) {
            this.$onInit = function () { };

            this.$onDestroy = function () { };
        },
    ],
}); 