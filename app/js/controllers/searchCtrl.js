app.controller('searchCtrl', function($scope, $location) { 
	$scope.query = '';

	//on form submit
	$scope.submitQuery = function () {
		if ($scope.query !== null) {
		  $location.path('/results');
		}
	};

	//on button click
	$scope.submitForm = $scope.submitQuery;
});