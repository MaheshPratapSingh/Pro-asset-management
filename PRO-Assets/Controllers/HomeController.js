proAssertsApp.controller('HomeController', function ($scope, tileFactory) {
    $scope.UserActionList = tileFactory.HomeTileList;
});