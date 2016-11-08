app.service('loginService', function($http, configuration, apiService) {
    this.userDetails = null;
    /** 
     * service that sends a user to the server to be logged in
     * @params: user is an object that contains
     * fNamem, lName, email and phone (optional)
     * @returns: promise
     * test account {
            fName: 'test',
            lName: 'test',
            email: 'test@gmail.com',
            phone: '',
            password: 'test'
	    }
    */
    this.login = function (email, password) {
        this.userDetails = null;
        return $http({
            method : "GET",
            params: {
                email: email,
                password: password,
            },
            url : configuration.nodeServer + "userLogin/userDetails",
        }).then( function (response) {
            response = apiService.checkResponse(response);
            if (!response.errorMessage) {
                this.userDetails = response.userDetails;
                return true;
            } else {
                this.userDetails = null;
                console.error(response.errorMessage);
                return false;
            }
        }.bind(this)).catch(function (error) {
            console.error(error);
            return false;
        });
    }

    this.isUserLogged = function () { return this.userDetails; };

    this.setUser = function (userDetails) {
        this.userDetails = userDetails;
    }

    this.logOut = function () {
        this.userDetails = null;
    }    
});