// $('.js-button-campaign').click(function() { 
	
// 	$('.js-overlay-campaign').fadeIn();
// 	$('.js-overlay-campaign').addClass('disabled');
// });

// закрыть на крестик
// $('.js-close-campaign').click(function() { 
// 	$('.js-overlay-campaign').fadeOut();
	
// });

// закрыть по клику вне окна
// $(document).mouseup(function (e) { 
// 	var popup = $('.js-popup-campaign');
// 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
// 		$('.js-overlay-campaign').fadeOut();
		
// 	}
// });




// uber
$('.js-button-uber').click(function() { 
	
	$('.UBER').fadeIn();
	$('.additional-overlay').addClass('disabled');
});

$('.js-close-campaign').click(function() { 
	$('.UBER').fadeOut();
	
});

$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.UBER').fadeOut();
		
	}
});
// WORK-UBER
$('.js-button-work-uber').click(function() { 
	
	$('.WORK-UBER').fadeIn();
	$('.additional-overlay').addClass('disabled');
});

$('.js-close-campaign').click(function() { 
	$('.WORK-UBER').fadeOut();
	
});

$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.WORK-UBER').fadeOut();
		
	}
});