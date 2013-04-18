/* lavalamp.nav.js - 라바 램프 네비게이션 디자인 스타일, 2012 © yamoo9.com
---------------------------------------------------------------- */
(function($) { // 자바스크립트 자가실행함수
	$(function() { // jQuery Ready()문.
	
		// 대상 참조
		var $nav = $('#navigation'),
			$current_item = $nav.find('.focus'),
			$lava = $('<li class="lava"/>'),
			options = {
				gap: 20,
				speed: 400,
				easing: 'easeInOutElastic',
				reset: 2000
			},
			reset;


		$nav.css('position', 'relative')
			.find('a').css({
				position: 'relative',
				zIndex: 1
			});

		$lava.appendTo($nav.find('ul'));
		// 옵션
		gap = 20; // $lava의 높이 폭 설정
		$lava.css({
			position: 'absolute',
			top: $current_item.position().top - (options.gap/2),
			left: $current_item.position().left,
			width: $current_item.outerWidth(),
			height: $current_item.outerHeight() + options.gap,
			backgroundColor: '#eee'
		}).appendTo($nav.find('ul'));

		$nav.find('li')
			.bind('mouseover focusin', function() {
				$lava.animate({
					left: $(this).position().left,
					width: $(this).outerWidth()
				}, {
					duration: options.speed,
					easing: options.easing,
					queue: false
				})
			})
			.bind('mouseout focusout', function() {
				reset = setTimeout(function() {
					$lava.animate({
						left: $current_item.position().left,
						width: $current_item.outerWidth()
					}, options.speed);
				}, options.reset);
			});
		
	});	
})(jQuery); // window.jQuery 객체 전달.