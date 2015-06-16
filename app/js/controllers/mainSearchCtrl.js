app.controller('mainSearchCtrl', function($scope, $location, sharedSearchQuery) { 
	// // Your search input
   // $scope.query = "";
   
	   $scope.search = function(query) {
		   	sharedSearchQuery.setQuery(query);
		   	$location.path('/results');
	   };
	
   

   // 		$scope.search = function(query) {
   			
   // 			$location.path('/results');
   // 		};

 //    // Your search function
	// $scope.results = [];
	// if($scope.blab !== "") {
	// 	$scope.search = function(blab) {     
	// 		blab.preventDefault();
	// 	    angular.forEach(vendors, function(value, key) {
	// 	        if (key === blab) {
	// 	            $scope.results.push();
	// 	            console.log("I Found something...");
	//                 console.log(key);
	//                 console.log(blab);

	// 	        }
	// 	    });

	//     };
 //    } 
});