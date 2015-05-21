var cities = [
  "Warszawa",
  "Wrocław",
  "Gdańsk"
];


var reviews = [{
  name: 'Cukiernia Miłkowski',
  category: 'Torty weselne',
  description: 'Przepyszny, piękny tort, polecam!',
}, {
  name: 'Suknie Belladonna',
  category: 'Suknie ślubne',
  description: 'Ręcznie szyte suknie z Francji!',
}, {
  name: 'Cukiernia Baśniowa',
  category: 'Torty weselne',
  description: 'Wyszukany, piękny tort, polecam!',
}];


var categories = [{
  name: 'Catering',
  img: 'img/categories/catering.jpg',
}, {
  name: 'Florist',
  img: 'img/categories/florist.jpg',
}, {
  name: 'Fryzjer',
  img: 'img/categories/fryzjer.jpg',
}, {
  name: 'Kapele',
  img: 'img/categories/kapele.jpg',
}, {
  name: 'Makeup',
  img: 'img/categories/makeup.jpg',
}, {
  name: 'Fotograf',
  img: 'img/categories/photo.jpg',
}, {
  name: 'Samochody',
  img: 'img/categories/samochod.jpg',
}, {
  name: 'Suknie',
  img: 'img/categories/suknie.jpg',
}, {
  name: 'Zakwaterowanie',
  img: 'img/categories/zakwaterowanie.jpg',
}];


var vendors = [{
  name: 'Suknie Belladonna',
  location: 'Al. Wilanowska 91, Warszawa',
  price: '800-1500zł',
  img: 'img/tiles/tile-1.jpg',
  reviewsNum: 10,
  age: 1
}, {
  name: 'Suknie Primavera',
  location: 'Al. Wilanowska 21, Warszawa',
  price: '400-1300zł',
  img: 'img/tiles/tile-2.jpg',
  reviewsNum: 30,
  age: 2
}, {
  name: 'Suknie Alicja',
  location: 'Al. Bilanowska 1, Warszawa',
  price: '4000-13000zł',
  img: 'img/tiles/tile-3.jpg',
  reviewsNum: 1,
  age: 3

}, {
  name: 'Suknie Gozo',
  location: 'Al. Malta 4, Warszawa',
  price: '2000-5000zł',
  img: 'img/tiles/tile-4.jpg',
  reviewsNum: 100,
  age: 4
}, {
  name: 'Suknie Beata',
  location: 'Al. Wilanowska 11, Warszawa',
  price: '4050-13030zł',
  img: 'img/tiles/tile-5.jpg',
  reviewsNum: 50,
  age: 5
}];









angular.module("WeddingEmergency", ['ngRoute'])
.controller('ReviewsList', [function() {
  this.data = reviews;
}])

.controller('ShowCategory', ['$routeParams', function($routeParams) {
  var controller = this;

  controller.data = categories;

  // $http({method: 'GET', url: '/' + $routeParams.id})
  // .success(function(data) {
  //   controller.category = data;
  // });
}])

.controller('ChooseCity', [function() {
  this.data = cities;
}])

.controller('CategoryVendors', [function() {
  this.data = vendors;
  this.predicate = '-age';
}]);

