app.controller('mainSearchCtrl', function($scope, $location, sharedSearchQuery) { 
	$scope.search = function(query) {
	   	sharedSearchQuery.setQuery(query);
	   	$location.path('/results').search({query: query});
	   	event.preventDefault();
   };
});