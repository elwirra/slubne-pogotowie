app.controller('mainCtrl', function($scope, $http, $stateParams) {

  $http.get('js/data/reviews.json').success(function(reviews) {
    $scope.reviews = reviews;
  });
  $http.get('js/data/categories.json').success(function(categories) {
    $scope.categories = categories;
  });
  $http.get('js/data/vendors.json').success(function(vendors) {
    $scope.vendors = vendors;
  });

});
