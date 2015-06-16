app.service('sharedSearchQuery', function () {
    var query = "";

    return {
        getQuery: function() {
            return query;
        },
        setQuery: function(value) {
           	query = value;
        }
    };
});