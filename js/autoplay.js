//轮播图
$(function(){
	var mytop = 1;
	$('.wrap-bd ol li').click(function(event) {
		if( $(this).attr('class') == undefined || $(this).attr('class') == '' ){

			mytop++;
		$(this).addClass('current').siblings().removeClass('current'); 
		var index= $(this).index();
		
		var num2 = 992;
		if(index > num){
			num2 = 992;
		}else{
			num2 = -992;
		}
		$('.wrap-bd ul li').eq(index).css({
			left:num2,
			zIndex:mytop
		}).animate({left:0}, 500);
		console.log(mytop);

		num = index;


		}
	});
	//2.自动播放
	var num = 0;
	var timer = null;
	function autoPlay(){
		mytop++;
		console.log(mytop);
		num++;
		if(num>4){
			num=0;
		}
		$('.wrap-bd ol li').eq(num).addClass('current').siblings().removeClass('current');
		$('.wrap-bd ul li').eq(num).css({
			zIndex: mytop
		}).hide().fadeIn(500);
	}
	function prevPlay(){
		mytop++;
		console.log(mytop);
		num--;
		if(num<0){
			num=4;
		}
		$('.wrap-bd ol li').eq(num).addClass('current').siblings().removeClass('current');
		$('.wrap-bd ul li').eq(num).css({
			zIndex: mytop
		}).hide().fadeIn(500);
	}
	timer = setInterval(autoPlay, 3000);
	$('.wrap-bd').mouseover(function(event) {
		clearInterval(timer);
		$(this).children('span').css('display','block');
	}).mouseout(function(event) {
		clearInterval(timer);
		timer = setInterval(autoPlay, 3000);
		$(this).children('span').css('display','none');
	});
	$('.right').click(function(event) {
		autoPlay();
	});
	$('.left').click(function(event) {
		prevPlay();
	});
});