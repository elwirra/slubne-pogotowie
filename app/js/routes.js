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
        label: 'Regulamin',
        parent: 'main'
      }
    })
    .state('privacypolicy', {
      url: '/polityka-prywatnosci',
      templateUrl: 'templates/pages/privacypolicy.html',
      ncyBreadcrumb: {
        label: 'Polityka prywatności',
        parent: 'main'
      }
    })
    .state('contact', {
      url: '/kontakt',
      templateUrl: 'templates/pages/contact.html',
      ncyBreadcrumb: {
        label: 'Kontakt',
        parent: 'main'
      }
    })
    .state('category', {
      url: '/category/:cat',
      templateUrl: 'templates/pages/category.html',
      ncyBreadcrumb: {
        label: '{{curCat}}',
        parent: 'main'
      },
      controller: function($scope, $stateParams) {
            $scope.curCat = $stateParams.cat; 
        }
    })
    .state('vendor', {
      url: '/category/:cat/:ven',
      templateUrl: 'templates/pages/vendor.html',
      ncyBreadcrumb: {
        label: '{{curVen}}',
        parent: 'category'
      },
      controller: function($scope, $stateParams) {
            $scope.curVen = $stateParams.ven; 
            $scope.curCat = $stateParams.cat; 
        }
    })
    .state('searchresults', {
      url: '/results?query',
      templateUrl: 'templates/pages/search-result.html',
      ncyBreadcrumb: {
        label: 'Szukasz: {{query}}',
        parent: 'main'
      },
      controller: function($scope, $stateParams) {
            $scope.query = $stateParams.query; 
        }
    })
    .state('addcompany', {
      url: '/add-company',
      templateUrl: 'templates/pages/add-company.html',
      ncyBreadcrumb: {
        label: 'Dodaj firmę',
        parent: 'main'
      }
    });
});