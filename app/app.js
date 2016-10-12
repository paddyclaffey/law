var app = angular.module('StartedProject', [
    "ngRoute"
])
   .controller('controller', function($scope) {
       $scope.greeting = "Hello World";
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        template : "<home></home>"
    })
    .when("/login", {
        template : "<login></login>"
    })
    .when("/answer", {
        template : "<answer><answer>"
    })
    .otherwise({
        template : "<home><home>"
    });
});