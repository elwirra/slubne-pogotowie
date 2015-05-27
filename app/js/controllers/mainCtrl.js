app.controller('mainCtrl', function($scope, $routeParams, breadcrumbs) {
  $scope.$on('$routeChangeSuccess', function() {
    $scope.curCategory = $routeParams.cat;
    $scope.curVendor = $routeParams.ven;
    
    $scope.breadcrumbs.options = {  
      'Category': $scope.curCategory,
      'Vendor': $scope.curVendor
    };
  });

  $scope.breadcrumbs = breadcrumbs;

  this.reviews = reviews;
  this.categories = categories;
  this.vendors = vendors;
});



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
  minPrice: 800,
  maxPrice: 1500,
  img: 'img/tiles/tile-1.jpg',
  reviewsNum: 10,
  age: 1,
  averageReview: 5,
  style: 'Nowoczesny',
  shortDesc: 'Jesteśmy awesome',
  longDesc: 'As I already mentioned, Amy and Pam were able to make the entire wedding planning process exciting, enjoyable, and easy, despite the fact that the bride lived 2 time zones away!',
  reviews: [{
    author: 'Susan',
    date: '05/2015',
    stars: 3,
    title: 'Wspaniała usługa!',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }, {
    author: 'Merkel',
    date: '02/2015',
    stars: 4,
    title: 'Najpiękniejszy dzień',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }]
}, {
  name: 'Suknie Primavera',
  location: 'Al. Wilanowska 21, Warszawa',
  minPrice: 1000,
  maxPrice: 5500,
  img: 'img/tiles/tile-2.jpg',
  reviewsNum: 30,
  age: 2,
  averageReview: 3.5,
  style: 'Vintage',
  shortDesc: 'Jesteśmy awesome',
  longDesc: 'As I already mentioned, Amy and Pam were able to make the entire wedding planning process exciting, enjoyable, and easy, despite the fact that the bride lived 2 time zones away!',
  reviews: [{
    author: 'Primavera',
    date: '05/2015',
    stars: 2,
    title: 'Wspaniała usługa!',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }, {
    author: 'Merkel',
    date: '02/2015',
    stars: 3,
    title: 'Najpiękniejszy dzień',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }]
}, {
  name: 'Suknie Alicja',
  location: 'Al. Bilanowska 1, Warszawa',
  minPrice: 900,
  maxPrice: 2200,
  img: 'img/tiles/tile-3.jpg',
  reviewsNum: 1,
  age: 3,
  averageReview: 4.5,
  style: 'Princess',
  shortDesc: 'Jesteśmy awesome',
  longDesc: 'As I already mentioned, Amy and Pam were able to make the entire wedding planning process exciting, enjoyable, and easy, despite the fact that the bride lived 2 time zones away!',
  reviews: [{
    id: 1,
    author: 'Alicja',
    date: '05/2015',
    stars: 1,
    title: 'Wspaniała usługa!',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }, {
    id: 2,
    author: 'Merkel',
    date: '02/2015',
    stars: 3,
    title: 'Najpiękniejszy dzień',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }]
}, {
  name: 'Suknie Gozo',
  location: 'Al. Malta 4, Warszawa',
  minPrice: 8000,
  maxPrice: 15000,
  img: 'img/tiles/tile-4.jpg',
  reviewsNum: 100,
  age: 4,
  averageReview: 3,
  style: 'Hand-made',
  shortDesc: 'Jesteśmy awesome',
  longDesc: 'As I already mentioned, Amy and Pam were able to make the entire wedding planning process exciting, enjoyable, and easy, despite the fact that the bride lived 2 time zones away!',
  reviews: [{
    author: 'Gozo',
    date: '05/2015',
    stars: 4,
    title: 'Wspaniała usługa!',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }, {
    author: 'Merkel',
    date: '02/2015',
    stars: 4,
    title: 'Najpiękniejszy dzień',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }]
}, {
  name: 'Suknie Beata',
  location: 'Al. Wilanowska 11, Warszawa',
  minPrice: 1800,
  maxPrice: 9500,
  img: 'img/tiles/tile-5.jpg',
  reviewsNum: 50,
  age: 5,
  averageReview: 4,
  style: 'Nowoczesny',
  shortDesc: 'Jesteśmy awesome',
  longDesc: 'As I already mentioned, Amy and Pam were able to make the entire wedding planning process exciting, enjoyable, and easy, despite the fact that the bride lived 2 time zones away!',
  reviews: [{
    author: 'Beata',
    date: '05/2015',
    stars: 3,
    title: 'Wspaniała usługa!',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }, {
    author: 'Merkel',
    date: '02/2015',
    stars: 3,
    title: 'Najpiękniejszy dzień',
    body: 'I cannot say enough good things about our experience working with Pam and Amy. Their creativity, organization, and attention to detail enabled my fiance, family, and I to relax and enjoy the wedding planning process! They are committed to ensuring that their clients receive high quality, personalized events. We were continuously impressed by their excellent communication skills, their professionalism, their flexibility, and their enthusiasm! They take time to engage their clients, understand their desires, and to help orchestrate them!'
  }]
}];