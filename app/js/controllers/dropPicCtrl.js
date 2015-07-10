app.controller('dropPicCtrl', function($scope) {
	$scope.interface = {};
	$scope.$on('$dropletReady', function whenDropletReady() {
	    $scope.interface.allowedExtensions(['png', 'jpg']);
	});
});
