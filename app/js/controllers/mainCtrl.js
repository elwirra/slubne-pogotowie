app.controller('mainCtrl', function($scope, $http, $firebaseObject, $firebaseArray) {
  	var ref = new Firebase("https://scorching-torch-1515.firebaseio.com");
  	var categories = new Firebase("https://scorching-torch-1515.firebaseio.com/0/categories");
  	var reviews = new Firebase("https://scorching-torch-1515.firebaseio.com/0/reviews");

  	$scope.data = $firebaseArray(ref);
 	$scope.categories = $firebaseArray(categories);
  	$scope.reviews = $firebaseArray(reviews);

  // 	var reviewCategory = "";
  // 	$scope.categories.forEach(function(reviewCategory) {
  // 		console.log(reviewCategory);
  //   	if($scope.categories.categoryId === $scope.reviews.categoryId) {
		//     reviewCategory = $scope.categories.name;
		//     console.log(reviewCategory);
		// }
  //   });
  	var reviewCategory = "";
    angular.forEach($scope.categories, function(key, value) {
    	console.log($scope.categories);
	    if (key == categoryId && value == 4) {
	      reviewCategory = category.name;
	      console.log(reviewCategory);
	      console.log(category.name);
	    } else {
	    	console.log("Nie pasuje");
	    }
	  });

    $scope.reviewCategory = reviewCategory;

});

