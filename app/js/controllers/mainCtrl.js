app.controller('mainCtrl', function($scope, $http, $firebaseObject) {
  var ref = new Firebase("https://scorching-torch-1515.firebaseio.com");
  /*$scope.data = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");*/

  $http.get('js/data/reviews.json').success(function(reviews) {
    $scope.reviews = reviews;
  });
  $http.get('js/data/vendors.json').success(function(vendors) {
    $scope.categories = vendors;
  });

});
