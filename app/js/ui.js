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

	// STARS 

	$(".stars").rateYo({
		fullStar: true,
		readOnly: true,
		starWidth: "15px"
	});

	$('#big-stars').rateYo({
		starWidth: "20px",
		fullStar: true,
		readOnly: true
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