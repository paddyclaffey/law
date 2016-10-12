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
                this.placeholderfname = 'Dont Enter First Name'
                this.placeholderlname = 'Dont Enter Last Name'
            }

            this.$onDestroy = function () {
                
            }
        
        this.myfunction = function () {
            alert('Hello World :-D')
        }
        },
    ],
});
