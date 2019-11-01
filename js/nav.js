
$(function(){
	//导航效果
	var h1 = $('.nav').offset().top; //获取导航到顶部的偏移量
	$(window).scroll(function(event){
		var h = $(window).scrollTop();
		if (h>h1) {
			$('.nav').css({
				'position':'fixed',
				'top':'0',
				'opacity':'0.9'
			});
		}else{
			$('.nav').css({
				'position':'static',
				'opacity':'1'
			});
		}
	});
	//导航音效
	$('.nav ul li').hover(function(){			
		var index = $(this).index();	
		$('audio').get(index).load();//音乐加载
		$('audio').get(index).play();//音乐播放
	},function(){
		
	});
});