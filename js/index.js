$(function(){var n,e,c;$(window).on("resize",function(){var i;i=$(window).width()<768,$(".banner > .carousel-inner > .carousel-item").each(function(o,n){var e=$(n),c=e.data(i?"img-xs":"img-lg"),t='url("'+c+'")';e.html("").css({backgroundImage:t}),i?e.html('<img class="d-block w-100" src="'+c+'" alt="">'):e.html("")})}).trigger("resize"),$(".masonry_container").masonry({itemSelector:".demo_item",isAnimated:!0,gutter:10}),$(window).scroll(function(){200<=$(document).scrollTop()?$("div.goBack").css({display:"block"}):$("div.goBack").css({display:"none"})}),$("div.goBack").on("click",function(){$("html,body").animate({scrollTop:0},500)}),$(".carousel").on("touchstart",function(o){o.preventDefault(),n=o.originalEvent.changedTouches[0].pageX,e=n}).on("touchmove",function(o){o.preventDefault(),e=o.originalEvent.changedTouches[0].pageX}).on("touchend",function(o){30<(c=e-n)?$(this).carousel("prev"):c<-30?$(this).carousel("next"):console.log("just touch")})});