app.component('login',
{
    bindings: {
    },

    templateUrl: 'app/login/login.html',
    
    controllerAs: '$ctrl',

    controller: [
        '$scope', 'registerService', 'loginService', '$window',
    
        function ($scope, registerService, loginService, $window) {
            this.$onInit = function () {
                if (loginService.isUserLogged()) {
                    $window.location.href = '#/profile';
                    return;
                }
                
                this.message = 'Login';
                this.email='paddyclaffey@gmail.com';
                this.password='abc';
            }

            this.$onDestroy = function () {
                
            }

            this.login = function () {
                loginService.login(this.email, this.password)
                .then(function (userLoggedIn) {
                    if (userLoggedIn) {
                        console.log('logged in');
                        $window.location.href = '#/profile';
                    } else {
                        console.log('user not logged in');
                    }
                }.bind(this))
                .catch(function () {
                    console.error('user not logged in');
                }.bind(this));
            }

            this.registerNewUser = function (fName, lName, email, phone) {
                fName = 'Paddy';
                lName = 'Claffey';
                email = 'paddyClaffey@gmail.com';
                phone = '087-901-9997';

                registerService.registerNewUser(fName, lName, email, phone)
                    .then(function (repsonse) {
                        if(response.created) {
                            console.log('New User has been added');
                        } else if(response.created) {
                            console.log('Error: ' + response.errorMessage);
                        }
                    })
                    .catch (function (error) {
                        console.error(error);
                    })

            };
        },
    ],
});
