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
      when('/category/:cat', {
      	templateUrl: 'templates/pages/category.html',
        label: 'Category'
      }).
      when('/category/:cat/:ven', {
       	templateUrl: 'templates/pages/vendor.html',
        label: 'Vendor'
      }).
      when('/results', {
        templateUrl: 'templates/pages/search-result.html',
        label: 'Results'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);