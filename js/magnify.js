$(function(){

	var w = $('.bigbox-l .photo').offset().left;
	var h = $('.bigbox-l .photo').offset().top;
	var w1 = $('.bigbox-l .photo').width();
	var h1 = $('.bigbox-l .photo').height();
	$('.bigbox-l .photo').mouseover(function(event){
		$('.bigbox-l .photo').mousemove(function(event){
			var mx = event.pageX-w-100;
			var my = event.pageY-h-100;
			if (mx<0) {
				mx=0;
			}
			if (mx>w1-200) {
				mx=w1-200;
			}
			if (my<0) {
				my=0;
			}
			if (my>h1-200) {
				my=h1-200;
			}
			var px = mx*2;
			var py = my*2;
			$('.bigbox-l .photo span').css({'left':mx,'top':my});
			$('.bigbox-l .photo .bigphoto').css('backgroundPosition','-'+px+'px -'+py+'px');
		});
		$(this).children().show();
	}).mouseout(function(event){
		$(this).children().hide();
	});
});
