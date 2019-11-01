$(function(){
	var flag=1;
	$('.serve span').click(function(){
		if (flag==1) {
			$(this).parent().stop().animate({'right':'0'},500);
			flag=2;
			$(this).children().attr('src','images/qqL.gif');
		}else{
			$(this).parent().stop().animate({'right':'-257px'},500);
			flag=1;
			$(this).children().attr('src','images/qqLopen.gif');
		}
	});
});