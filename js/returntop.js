/*返回顶部*/
$(function() {
	var h1 = $(window).height();
	$(window).scroll(function(event) {
		var h2 = $(window).scrollTop();
		if(h2 > h1/2){
			$('.returntop').fadeIn(500);
		}else{
			$('.returntop').fadeOut(500);
		}
	});
	$('.returntop').click(function(event) {

		$('html,body').animate({scrollTop:0}, 500);
	});
});