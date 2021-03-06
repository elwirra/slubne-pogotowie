app.controller('ratingCtrl', function ($scope, $http, $stateParams) {

  $http.get('js/data/vendors.json').success(function(vendors) {
    $scope.vendors = vendors;

    var ratingSum = 0;
    var averageRating = 0; 
    var reviewsNum = 0;

    // Average vendor rating from user ratings
    // iterating through vendors (5)
    for(var i = 0; i < vendors.length; i++) {
        // iterating through each vendor reviews (2)
        for(var t = 0; t < vendors[i].reviews.length; t++) {
          // sum of all stars from all 
          if (vendors[i].name === $stateParams.ven) { 
            ratingSum += vendors[i].reviews[t].stars;
          }
        }
        //number of reviews in one vendor
        reviewsNum = vendors[i].reviews.length;
    }
    averageRating = Math.floor(ratingSum/reviewsNum);

    $scope.reviewsNum = reviewsNum;
    $scope.averageRate = averageRating;
  });

});