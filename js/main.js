(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

			$('form').placeholder();

			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left'
					});

				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

	});

	var i = 0;                    
	var vagasCount = 72;
		function loopVagas () {           
			setTimeout(function () {    
			$('#vagas').html(i);          
			i++;                     
			if (i <= vagasCount) {           
				loopVagas();             
			}
		}, 270)
	}
	loopVagas();

	var j = 0;                    
	var duracaoCount = 8;
		function loopDuracao () {           
			setTimeout(function () {    
			$('#semestres').html(j);          
			j++;                     
			if (j <= duracaoCount) {           
				loopDuracao();             
			}
		}, 2000)
	}
	loopDuracao();

	var v = 0;                
	var valorCount = 603;
		function loopValor () {           
			setTimeout(function () {    
			$('#mensalidade').html(parseFloat(v.toFixed(2)).toLocaleString('pt-BR', {
				currency: 'BRL',
				style: 'currency',
				minimumFractionDigits: 2
			  })); 
			v++;                     
			if (v <= valorCount) {           
				loopValor();             
			}
		}, 30)
	}
	loopValor();
	

})(jQuery);