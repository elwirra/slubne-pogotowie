app.controller('searchCtrl', function($scope, $location, sharedSearchQuery) { 	
  $scope.query = sharedSearchQuery.getQuery();
  event.preventDefault();
});

