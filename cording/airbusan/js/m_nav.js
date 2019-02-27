// JavaScript Document


//nav
$(document).ready(function() {
	var cnt = 1;
	
    $('.util_narrow > a').click(function() {
		
		if(cnt ==1){
			 $('.util_mnu, .gnb').slideDown('fast');
			 $('header').animate({ height: 140 }, 'fast');
			 cnt = 0;
		}else{
			$('.util_mnu, .gnb').slideUp('fast');
			$('header').animate({ height: 50 }, 'fast');
			 cnt = 1;
		};
       
    });
});



//슬라이더
$(document).ready(function() {
	 $(window).load(function() {
		$('.flexslider').flexslider();
	  });
});
