proAssertsApp.factory('tileFactory', function () {

    var homeTileList = [
        { Name: 'Asserts', Url: 'Asserts' },
        { Name: 'Teams', Url: 'Teams' },
        { Name: 'category', Url: 'category' }
    ];

    var defaultList = [{ Name: 'Back', Url: 'Home' }];

    return {
        HomeTileList: homeTileList,
        DefaultList: defaultList
    }

});