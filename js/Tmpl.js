Tmpl = {
slider : function(){
jQuery('div.sliderElements').owlCarousel({
    margin:10,
//	stagePadding: 13,
	loop:true,
	autoplay:true,	
	smartSpeed:200,       // szybkosc przesuwania 
	autoplayTimeout:2500,  // czas pomiedzy przesuwaniem
	
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
	    smartSpeed:666,
	    autoplayTimeout:1000,
            nav:false,
	    loop:true
        },
        800:{
            items:1,
            nav:false,
	    loop:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true,
	    dots:true
        }
    }
})
},
backTop : function(){
	// hide #back-top first
	jQuery("#back-top").hide();
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		jQuery('#back-top a').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
},
	navigator : (function() { 
					$('a[href^="#"]').on('click', function(event) {
						var target = $( $(this).attr('href') );
						if( target.length ) {
							event.preventDefault();
							$('html, body').animate({
								scrollTop: target.offset().top
							}, 1000);
						}
					});
				}),
submenu : function() {
		jQuery('li.parent').toggleClass('active');
	},	
	menumobile : function() {
		jQuery('nav.menu').toggleClass('active');
		if(jQuery('nav.menu').hasClass('active')){
			setTimeout(function(){
				jQuery('nav.menu').addClass('ekstraactive');       /*jesli klasa nav.menu hasClass(maKlase) active to po od³ozeniu czas 200ms dodaj klase tego nav.menu "ekstraactive*/
			},200);
		}else{																	/*jesli nie to usun ta klase*/
				jQuery('nav.menu').removeClass('ekstraactive');
			}
			jQuery('li.parent').removeClass('active');   /* to usuwa klase ktora wyswietla oferte (submenu)*/
		}
}

