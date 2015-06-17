app.controller('searchCtrl', function($scope, $location, sharedSearchQuery) { 	
	$scope.query = sharedSearchQuery.getQuery();
	$scope.search = function(query) { 
	  sharedSearchQuery.setQuery(query);
	  event.preventDefault();
	  $location.path('/results').search({query: query});
	};
});

