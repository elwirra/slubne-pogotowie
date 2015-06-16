app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'templates/pages/main.html',
      ncyBreadcrumb: {
        label: 'Strona Główna'
      }
    })
    .state('terms', {
      parent: 'main',
      url: '/regulamin',
      templateUrl: 'templates/pages/terms.html',
      ncyBreadcrumb: {
        label: 'Regulamin'
      }
    })
    .state('privacypolicy', {
      url: '/polityka-prywatnosci',
      templateUrl: 'templates/pages/privacypolicy.html',
      ncyBreadcrumb: {
        label: 'Polityka prywatności'
      }
    })
    .state('contact', {
      url: '/kontakt',
      templateUrl: 'templates/pages/contact.html',
      ncyBreadcrumb: {
        label: 'Kontakt'
      }
    })
    .state('category', {
      url: '/category/:cat',
      templateUrl: 'templates/pages/category.html',
      ncyBreadcrumb: {
        label: 'Category'
      },
      controller: function($scope, $stateParams) {
            $scope.curCat = $stateParams.cat; 
        }
    })
    .state('vendor', {
      url: '/category/:cat/:ven',
      templateUrl: 'templates/pages/vendor.html',
      ncyBreadcrumb: {
        label: 'Vendor'
      },
      controller: function($scope, $stateParams) {
            $scope.curVen = $stateParams.ven; 
        }
    })
    .state('searchresults', {
      url: '/results',
      templateUrl: 'templates/pages/search-result.html',
      ncyBreadcrumb: {
        label: 'Wyniki wyszukiwania'
      }
    })
    .state('addcompany', {
      url: '/add-company',
      templateUrl: 'templates/pages/add-company.html',
      ncyBreadcrumb: {
        label: 'Dodaj firmę'
      }
    });
});