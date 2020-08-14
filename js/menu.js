$(document).ready(
	function() {
		$('.header-burger').click(
			function(event) {
				$('.header-burger, .header-menu').toggleClass('active');
				$('body').toggleClass('lock');
			}
		);

		$('.header-menu a').click(
			function(event) {
				$('.header-burger, .header-menu').removeClass('active');
				$('body').removeClass('lock');
			}
		);
	}
);
