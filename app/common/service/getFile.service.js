app.service('getServiceAPI', function($http) {
    this.getFileDirectory = function () {
        return $http({
            method : "GET",
            url : "http://localhost:8081/getFileDirectory",
        });
    }
});