app.controller('searchCtrl', function($scope, $location, sharedSearchQuery) { 
	
  $scope.query = sharedSearchQuery.getQuery();

 // //    // Your search function
	// // $scope.results = [];
	// // if($scope.blab !== "") {
	// // 	$scope.search = function(blab) {     
	// // 		blab.preventDefault();
	// // 	    angular.forEach(vendors, function(value, key) {
	// // 	        if (key === blab) {
	// // 	            $scope.results.push();
	// // 	            console.log("I Found something...");
	// //                 console.log(key);
	// //                 console.log(blab);

	// // 	        }
	// // 	    });

	// //     };
 // //    } 
});


//     // Make sure blab has content (always good to double check)
//     if($scope.blab !== "") {

//         // Alter URL to show new request
//         $location.search('q', $scope.blab);
//         $location.path('/results');

//         // Make a GET request to your URL that will 
//         // return data for you to populate
//         $http.get('js/data/vendors.json').
//             success(function(data, status, headers, config) {

//                 // Assuming the data returned is a list of items
//                 // or object items
//                 // (i.e. [ "Search Result1", "Search Result2", ... ]
//                 SearchService.arrSearchResults = data;

//             }).
//             error(function(data, status, headers, config) {

//                 // Empty the array of search results 
//                 // to show no results
//                 SearchService.arrSearchResults = [];
//             });
//     }
// };

			// if ('blab' !== '') {
			// 	SearchService.search($scope.blab).success(function(response) {
			// 		$scope.searchResults = response.data;
			// 		console.log(response.data);
			// 	});
			// }	
      		// $location.search('q', $scope.blab);
			// if ($location.path() !== '/results') {
			// 	$location.path('/results');
			// } else {
			// 	$location.path('/');
			// }