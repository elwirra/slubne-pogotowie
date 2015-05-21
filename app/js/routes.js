angular.module("WeddingEmergency").config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/pages/main.html'
      }).
      when('/:id', {
      	templateUrl: 'templates/pages/category.html',
      	controller: 'ShowCategory',
      	controllerAs: 'showcat'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);