/**
 * Created by pl on 2017/8/3.
 * 'use strict'
 */

$(function () {
	
	function bannerResize() {
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth<768;
		$('.banner > .carousel-inner > .item').each(function (i,e) {
			var $ele = $(e);
			var url = $ele.data(isSmallScreen?'img-xs':'img-lg');
			var bgUrl = 'url("'+url+'")';
			$ele.html('').css({'backgroundImage': bgUrl});
			if(isSmallScreen){
				$ele.html('<img src="'+url+'" alt="">');
			}else{
				$ele.html('');
			}
		})
	}
	
	function tabscroll() {
		/*控制tab标签页容器的宽度*/
		var $ulContainer = $('.products .nav-tabs');
		var barW = 30;
		$ulContainer.children().each(function (i,e) {
			barW += e.clientWidth;
		});
		if(barW > $(window).width()){
			$ulContainer.css('width',barW).parent().css('overflow-x','scroll');
		}
	}
	
	/*JQ浏览器窗口大小变化事件‘resize’*/
	$(window).on('resize',function () {
		bannerResize();
		tabscroll();
	}).trigger('resize');
	
	//初始化tooltip插件
	$('[data-toggle="tooltip"]').tooltip();
	
	//新闻tab点击
	$('.news .nav-pills a').on('click',function () {
		var title = $(this).data('title');
		$('.news .news-title').text(title);
		console.log(0);
	});
	
	//banner轮播图移动端滑动效果
	//1.获取手指滑动的方向
	//2.根据方向点击下一张上一张,Bootstrap原生方法.carousel('next').carousel('prev')
	/*
	* 1、记录手指点下瞬间的坐标（touchstart）
	* 2、记录手指离开瞬间的坐标（touchmove）
	* 3、计算偏移量，判断方向（touchend）
	* 总结：touchmove的最后坐标减去touchstart的起始坐标。
		 X的结果如果正数，则说明手指是从左往右划动；
		 X的结果如果负数，则说明手指是从右往左划动；
		 Y的结果如果正数，则说明手指是从上往下划动；
		 Y的结果如果负数，则说明手指是从下往上划动。
	* */
	var $carousel = $('.carousel');
	var startX,moveEndX,startY,moveEndY,X,Y;
	$carousel.on("touchstart", function(e) {
		e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX;
		moveEndX = startX;
		// startY = e.originalEvent.changedTouches[0].pageY;
		// moveEndY = startY;
	}).on("touchmove", function(e) {
		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX;
		// moveEndY = e.originalEvent.changedTouches[0].pageY;
		// Y = moveEndY - startY;
	}).on('touchend', function (e) {
		X = moveEndX - startX;
		//因为移动端屏幕小，手指精度不够，所以当偏移量太小时不算
		var num = 30;
		if ( X > num ) {
			$(this).carousel('prev');
		}
		else if ( X < -num ) {
			$(this).carousel('next');
		}
		// else if ( Y > num) {
		// 	console.log("top 2 bottom");
		// }
		// else if ( Y < -num ) {
		// 	console.log("bottom 2 top");
		// }
		else{
			console.log("just touch");
		}
	});
	
});