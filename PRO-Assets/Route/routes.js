proAssertsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/Home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController'
        })
        .when('/Asserts', {
            templateUrl: 'Views/Default.html',
            controller: 'DefaultController'
        })
        .when('/Teams', {
            templateUrl: 'Views/Default.html',
            controller: 'DefaultController'
        })
        .when('/category', {
            templateUrl: 'Views/Default.html',
            controller: 'DefaultController'
        })
        .otherwise({
            redirectTo: '/Home'
        });
});