app.controller('mainCtrl', function($scope, $http, $routeParams, breadcrumbs) {
  $scope.$on('$routeChangeSuccess', function() {
    $scope.curCategory = $routeParams.cat;
    $scope.curVendor = $routeParams.ven;
    
    $scope.breadcrumbs.options = {  
      'Category': $scope.curCategory,
      'Vendor': $scope.curVendor
    };
  });


  $scope.breadcrumbs = breadcrumbs;

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
