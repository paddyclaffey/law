app.service('apiService', function() {
    /** 
     * service will have functions to handle api responses
     * 
    */
    this.checkResponse = function (response) {
        if (!response) {
            console.error('No Response Recieved');
            return false;
        }

        if (!response.status || response.status != 200) {
            console.error('API Error');
            return false;
        }

        if (!response.data) { 
            console.error('No data given in response');
            return false;
        }

        return response.data
    }
});