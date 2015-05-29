app.controller('slidesCtrl', function ($scope, $routeParams) {

  this.vendors = vendors;
  
  // Average vendor rating from user ratings
  // iterating through vendors (5)
  for(var i = 0; i < vendors.length; i++) {
      // iterating through each vendor reviews (2)
      for(var t = 0; t < vendors[i].images.length; t++) {
        // sum of all stars from all vendors
        if (vendors[i].name === $routeParams.ven) { 
          $scope.slideUrl = vendors[i].images;
          console.log($scope.slideUrl);
        }
      }
  }


});