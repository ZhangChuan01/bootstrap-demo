$(function () {
	//文档加载完执行
	function resize() {
		//获取屏幕宽度
		var windowWidth=$(window).width();

		var smallScreen=windowWidth<768;
		var imgSrc=smallScreen?$(".item").data('image-sm'):$(".item").data('image-lg');
		$(".item").html('<img src="'+imgSrc+'" alt="" />');
		if(smallScreen){
			$(".item").empty();
			$(".item").css('backgroundImage','url("'+imgSrc+'")');
			$("#logo img").addClass("img-responsive");
		}else{
			$("#logo img").removeClass("img-responsive");
		}
	}
	$(window).on('resize',resize).trigger('resize');
	$(window).scroll(function(){
		var ele= $(document).scrollTop()||$("body").scrollTop();
		if(ele>30){
			$(".bgc").css('height','70px')
		}else{
			$(".bgc").css('height','0')
		}
		if(ele>100){
			$("#service>.row>div").addClass("fadeInUp");
		}
		if(ele>1300){
			$("#target .row:nth-child(1)").addClass("fadeInDown");
			$("#target .row:nth-child(2)").addClass("fadeInUp");
		}
		if(ele>1890){
			$("#footer .num").addClass("fadeInLeft");
		}
	});
});