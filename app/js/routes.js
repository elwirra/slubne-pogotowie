app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/pages/main.html',
        label: 'Strona główna'
      }).
      when('/regulamin', {
        templateUrl: 'templates/pages/terms.html',
        label: 'Regulamin'
      }).
      when('/polityka-prywatnosci', {
        templateUrl: 'templates/pages/privacypolicy.html',
        label: 'Polityka prywatności'
      }).
      when('/kontakt', {
        templateUrl: 'templates/pages/contact.html',
        label: 'Kontakt'
      }).
      when('/:cat', {
      	templateUrl: 'templates/pages/category.html',
        label: 'Category'
      }).
      when('/:cat/:ven', {
       	templateUrl: 'templates/pages/vendor.html',
        label: 'Vendor'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);