'use strict';

$(".scroll").click(function(event){
     event.preventDefault();
     //calculate destination place
     var dest=0;
     if($(this.hash).offset().top > $(document).height()-$(window).height()){
          dest=$(document).height()-$(window).height();
     }else{
          dest=$(this.hash).offset().top;
     }
     //go to destination
     $('html,body').animate({scrollTop:(dest - 100)}, 1000,'swing');
});

$('.nav-alice').find('a').click(function(event){
	var visibility = $('.navbar-toggle').css('display');
	console.log("visibility" + visibility);
	//$('.nav-alice').collapse('hide');
	if(!(visibility.localeCompare('none') == 0)) {
		$('.navbar-toggle').click();
	}
})

