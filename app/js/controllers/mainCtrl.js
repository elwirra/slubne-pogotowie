app.controller('mainCtrl', function($scope, $http, $firebaseObject) {
  var ref = new Firebase("https://scorching-torch-1515.firebaseio.com");
  $scope.categories = $firebaseObject(ref);
});
