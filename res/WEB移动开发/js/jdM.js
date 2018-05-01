/**
 * Created by pl on 2017/8/7.
 * 'use strict'
 */

(function () {
	searchBg();
	secondKill('2017/08/08 10:30:00','2017/08/08 11:15:00');
})();

/*头部背景色*/
function searchBg() {
	var search = document.querySelector(".jd-header>.content");
	var banner = document.querySelector(".jd-banner");
	var bannerH = banner.offsetHeight;
	window.onscroll = function () {
		var top = document.body.scrollTop;
		if(top>bannerH){
			search.style.background = "rgba(201,21,35,0.85)"
		}else{
			var op = top/bannerH * 0.85;
			search.style.background = "rgba(201,21,35,"+op+")"
		}
	}
}
/*秒杀倒计时*/
/*sta:开始时间
* end:结束时间
* */
function secondKill(sta,end) {
	var spanTime = document.querySelectorAll(".jd-product .sk-time>.num");
	
	var staTime= new Date(sta);
	var endTime= new Date(end);
	var t1 = endTime.getTime() - staTime.getTime();
	
	var t2s = setInterval(function () {
		var nowTime = new Date();
		var t2 = staTime.getTime() - nowTime.getTime();
		if(t2<=0){
			var t1s = setInterval(function () {
				nowTime = new Date();
				t1 = endTime.getTime() - nowTime.getTime();
				t1 = parseInt(t1/1000);
				
				/*天数*/
				var d = Math.floor(t1 / (60 * 60 * 24));
				/*时分秒*/
				var tt = t1 % (60 * 60 * 24);
				var h = Math.floor(tt / (60 * 60));
				var m = Math.floor(tt / 60 % 60);
				var s = tt % 60;
				
				spanTime[0].innerHTML = d;
				
				spanTime[1].innerHTML = h > 10 ? Math.floor(h / 10) : 0;
				spanTime[2].innerHTML = h % 10;
				
				spanTime[3].innerHTML = m > 10 ? Math.floor(m / 10) : 0;
				spanTime[4].innerHTML = m % 10;
				
				spanTime[5].innerHTML = s > 10 ? Math.floor(s / 10) : 0;
				spanTime[6].innerHTML = s % 10;
				if(t1<=0){
					clearInterval(t1s);
				}
			},1000);
			clearInterval(t2s);
		}
	},1000);
}


