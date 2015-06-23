app.controller('mainCtrl', function($scope, $http, $firebaseObject, $firebaseArray) {
  	var ref = new Firebase("https://scorching-torch-1515.firebaseio.com");
  	var categories = new Firebase("https://scorching-torch-1515.firebaseio.com/0/categories");
  	var reviews = new Firebase("https://scorching-torch-1515.firebaseio.com/0/reviews");

  	$scope.data = $firebaseArray(ref);
 	$scope.categories = $firebaseArray(categories);
  	$scope.reviews = $firebaseArray(reviews);

});
