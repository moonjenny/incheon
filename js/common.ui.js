$(document).ready(function(){
	//main
	var mainNav = $(".nav-pagination ul li");
	var mainContents = $("#main-contents > div");

	mainNav.click(function(e){
		e.preventDefault();
		console.log("aa");
		var target = $(this);
		var index = target.index();
		//alert(index);
		var mainSection = mainContents.eq(index);
		var offset = mainSection.offset().top;
		//alert(offset);
		$(".offset_top").text(offset);
		
		$("html,body").animate({scrollTop:offset},600);
	});
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		
		$(".scroll_top").text(wScroll);
		
		if(wScroll >= mainContents.eq(0).offset().top){
			mainNav.removeClass("active");
			mainNav.eq(0).addClass("active");
		}
		if(wScroll >= mainContents.eq(1).offset().top){
			mainNav.removeClass("active");
			mainNav.eq(1).addClass("active");
		}
		if(wScroll >= mainContents.eq(2).offset().top){
			mainNav.removeClass("active");
			mainNav.eq(2).addClass("active");
		}
		if(wScroll >= mainContents.eq(3).offset().top){
			mainNav.removeClass("active");
			mainNav.eq(3).addClass("active");
		}		
	});
	
	var mainRoot = $('html, body');
	$('.btn-arr-down, .btn-arr-up').click(function() {
		mainRoot.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 600);
		return false;
	});
	

	//nav-menu
	var navBtn = $(".header-mobile .btn-menu");
	var navMenu = $(".nav-menu");
	var navClose = $(".btn-nav-close");
	navBtn.click(function(){
		navMenu.addClass("open");
		$("html,body").css({
			overflow: 'hidden'
		});
	});
	navClose.click(function(){
		navMenu.removeClass("open");
		$("html,body").css({
			overflow: 'auto'
		});
	});

	//location
	var btnLocation = $(".top-location li > a");
	btnLocation.click(function(e){
		e.preventDefault();
		$(this).parent().find(".sub-location").toggleClass("open");
	});
	
});


