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

angular.module("WeddingEmergency", ['ngRoute'])
.controller('ReviewsList', [function() {
	this.data = reviews;
}]);