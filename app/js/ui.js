var inputNumber = document.getElementById('price-u-value');

html5Slider.noUiSlider.on('update', function( values, handle ) {

	var value = values[handle];

	if ( handle ) {
		inputNumber.value = value;
	} else {
		select.value = Math.round(value);
	}
});

select.addEventListener('change', function(){
	html5Slider.noUiSlider.set([this.value, null]);
});

inputNumber.addEventListener('change', function(){
	html5Slider.noUiSlider.set([null, this.value]);
});


var secInputNumber = document.getElementById('price-l-value');

html5Slider.noUiSlider.on('update', function( values, handle ) {

	var value = values[handle];

	if ( handle ) {
		secInputNumber.value = value;
	} else {
		select.value = Math.round(value);
	}
});

select.addEventListener('change', function(){
	html5Slider.noUiSlider.set([this.value, null]);
});

secInputNumber.addEventListener('change', function(){
	html5Slider.noUiSlider.set([null, this.value]);
});


var html5Slider = document.getElementById('price');

noUiSlider.create(html5Slider, {
	start: [ 20, 3000 ],
	connect: true,
	range: {
		'min': 0,
		'max': 10000
	}
});

	

$(function() {

	// SQUARE TILES 
	var tileHeight = $('.category-tile').width();
	$('.category-tile').css({'height':tileHeight+'px'});

	// CUSTOM SELECT 
	$('select').selectize({
	    create: false,
	    sortField: 'text'
	});

	// PACKERY
	var $container = $('#tiles-wrapper');
	  $container.packery({
	    itemSelector: '.tile',
	    gutter: 0
	});

	// SLIDER
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  centerMode: true,
	  focusOnSelect: true,
	  arrows: false
	});

});