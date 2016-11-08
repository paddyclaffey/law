app.service('registerService', function($http, configuration) {
    /** 
     * service that sends a user to the server to be added
     * @params: newUser is an object that contains
     * fNamem, lName, email and phone (optional)
     * @returns: promise
    */
    this.registerNewUser = function (newUser) {
        return $http({
            method : "POST",
            data: newUser,
            url : configuration + "registerNewUser",
        });
    }

    
});