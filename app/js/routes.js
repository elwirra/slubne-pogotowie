angular.module("WeddingEmergency").config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/notes', {
        templateUrl: 'templates/pages/main.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);