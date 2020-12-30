$(document).ready(function(){
	//main
	

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


