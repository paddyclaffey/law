app.component('home', {
    bindings: {
    },

    templateUrl: 'app/home/home.html',
    
    controllerAs: '$ctrl',

    controller: [
        '$scope',
        'getServiceAPI',
    
        function ($scope, getServiceAPI) {
            this.$onInit = function () {
                this.loading = false;
                this.message = 'home';
            }

            this.$onDestroy = function () {
                
            }

            this.getFileDirectory = function () {
                this.loading = true;
                getServiceAPI.getFileDirectory().then(function (data) {
                    this.years = data.years;
                    this.questions = data.questions;
                    this.loading = false;
                }.bind(this)).catch(function(error){
                    console.log(error);
                    this.loading = false;
                }.bind(this));
            }
        },
    ],
}); 