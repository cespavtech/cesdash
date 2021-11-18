AOS.init();
preloader = new $.materialPreloader({
       position: 'top',
       height: '7px',
       col_1: '#3f31d7',
       col_2: '#e43e2e',
       col_3: '#1ef610',
       col_4: '#e43e2e',
       fadeIn: 200,
       fadeOut: 700
});


$(document).ready(function(){
	$('[data-zindex]').each(function(){
		var z = parseInt( $( this ).attr('data-zindex'));
	    $(this).css('z-index', z);
	});

	$('[data-right]').each(function(){
		var rp = parseInt( $( this ).attr('data-right'));
	    $(this).css('margin-right', rp);
	});

	$('[data-width]').each(function(){
		var dw = parseInt( $( this ).attr('data-width'));
	    $(this).css('width', dw);
	});

	$(".nav-toggler").click(function(){
		if ($($(this).attr('data-target')).is(':hidden')) {
			hide_allnavcards();
			$($(this).attr("data-target")).fadeToggle( "slow", "linear" );
		}else{
			hide_allnavcards();
		}
	});

});

function hide_allnavcards() {
	$(".navbar-cards:visible").each(function(){
 		$(this).fadeToggle( "slow", "linear" );
	});
}


$(document).click(function(event) { 
  var $target = $(event.target);
  if(!$target.closest('.nav-wrap').length && 
  !$($target).is(".nav-toggler")) {
    hide_allnavcards();
  }        
});
