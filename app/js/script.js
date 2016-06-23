
/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/
/*(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200,
				    highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);*/ 

/* ###### init slide mobile menu  ######*/
/* ###### bower i jQuery.mmenu  ######*/
/* ###### more  https://gist.github.com/fantazer/a35dfd0f7b8dea3b1cf6  ######*/
/*
	$("#my-menu").mmenu({
		extensions: ["effect-menu-slide", "effect-listitems-slide"] - for animation
	});
*/

$(document).ready(function(){
	//animate hover menu
	/*$('.top-menu__el').hover(
		function(){
			$(this).find('.top-menu__sub').css('opacity',0).show().animate({opacity:1},400);
		},
		function(){
			$(this).find('.top-menu__sub').css('opacity',1).show().animate({opacity:0},200);
		}
	)*/
	//animate planet
	$('.planet-el').click(function(){
		$('.planet-el').addClass('reset-position');
		$('.planet-wraper').addClass('main-cont');
		$('.planet-wraper').addClass('planet-wraper--mid');
		$('.rows-cont').css('height','auto');
		$('.section-main__title').hide();
	
		$scene.parallax('disable');

		var typePlanet = $(this).data('type');
		$('.planet-content').each(function(){
			$(this).hide();
			if ($(this).data('module')== typePlanet) {
				$(this).show();
			};
		})

	})

	/* ###### For SlideToggle Elements  ######*/
	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}

	//toggle top menu
	hideToggle('.top-menu__bar','.top-menu-order');
	hideToggle('.top-menu__bar','.top-menu__sub');
	hideToggle('.top-menu__toggle','.top-menu__cont');

	//Paralax
	var $scene = $('.section-main').parallax();

	//Slider default
	function defaultSlider(sliderClass) {
	    var slider = $(sliderClass);
	      slider.owlCarousel({
	      		items : 1,
	      	 	autoHeight : true,
	      	 	dots: false,
	      	 	autoPlay : false,
	      	 	singleItem:true,
	      	 	nav:true,
	      			navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']
	      	}
	   );
	}
	//Slider mobile
	function mobileSlider(resolution,sliderClass) {
	    var checkWidth = $(window).width();
	    var slider = $(sliderClass);
	    if (checkWidth > resolution - 1) {
	      slider.trigger('destroy.owl.carousel'); 
	      slider.removeClass('owl-carousel');
	    } else if (checkWidth < resolution) {
	    	slider.addClass('owl-carousel')
	      slider.owlCarousel({
	        items : 1,
				 	autoHeight : true,
				 	autoPlay : false,
				 	singleItem:true
	      });
	    }
	  }
	//
	$(window).resize(function(){
			mobileSlider(768,'.people');
			mobileSlider(768,'.fluid');
			mobileSlider(768,'.aplication-type');
			mobileSlider(768,'.other-service');
			mobileSlider(768,'.syte-type');
			mobileSlider(768,'.repair-discr');
		}
	);
	mobileSlider(768,'.fluid');
	mobileSlider(768,'.people');
	mobileSlider(768,'.aplication-type');
	mobileSlider(768,'.other-service');
	mobileSlider(768,'.syte-type');
	mobileSlider(768,'.repair-discr');
	
	defaultSlider('.promotion-slider');


	//Slider fore planet
	$(".planet-content__seo,.planet-content__web").owlCarousel({
			 	responsive : {
			 		0:{
					 	items : 1
				 	},
				 	768:{
					 	items : 2
				 	},
				 	960:{
					 	items : 2
				 	},
				 	1200:{
					 	items : 4
				 	},
				 	
			  },
			 	autoHeight : true,
			 	dots: false,
			 	autoplay : true,
			 	singleItem:true,
			 	nav:true,
					navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']
			 	}
	);
	$(".planet-content__smm").owlCarousel({
			 	responsive : {
			 		0:{
					 	items : 1
				 	},
				 	768:{
					 	items : 2
				 	},
				 	960:{
					 	items : 2
				 	},
				 	1200:{
					 	items : 5
				 	},
			  },
			 	autoHeight : true,
			 	dots: false,
			 	autoplay : true,
			 	singleItem:true,
			 	nav:true,
					navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']
			 	}
	);

	//Work-template
	$(".work-template").owlCarousel({
			 	responsive : {
			 		0:{
					 	items : 1
				 	},
				 	768:{
					 	items : 2
				 	},
				 	960:{
					 	items : 2
				 	},
				 	1200:{
					 	items : 3
				 	},
			  },
			  margin:50,
			 	autoHeight : true,
			 	dots: true,
			 	autoplay : true,
			 	singleItem:true,
			 	nav:false
			 }
			 
	);

	//Slider partners
	$(".partners").owlCarousel({
			 	responsive : {
			 		0:{
					 	items : 1
				 	},
				 	768:{
					 	items : 2
				 	},
				 	960:{
					 	items : 2
				 	},
				 	1200:{
					 	items : 5
				 	},
			  },
			  margin:50,
			 	autoHeight : true,
			 	dots: false,
			 	autoplay : true,
			 	singleItem:true,
			 	nav:true,
					navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']
			 }
	);
	
	/* ###### init EasyDropDown style for selects  ######*/
	/* ###### bower i easydropdown  ######*/
	/*<select class="dropdown"> add class (dropdown)
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
	</select>
	*/
	

	/* ###### init nice select style for selects  ######*/
	/* ###### bower i jquery-nice-select  ######*/
	/* ###### https://gist.github.com/fantazer/8eac81e51c93ee8ecbf21f400bff470d  ######*/
	/* $('select').niceSelect();*/
	/*<select >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
	</select>
	*/

		/* ###### init datepicker  ######*/
		/* ###### bower i bootstrap-datepicker  ######*/
		/* ###### https://gist.github.com/fantazer/de1d6079f71350c32afbb5eb442f38db  ######*/
		/*$('.input-date').datepicker({
			language: 'ru'
		});
		//for close on select date
		$('.input-date').on('changeDate', function(ev){
		    $(this).datepicker('hide');
		});

*/


	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/


	/* ###### init bpopup  ######*/
	/* ###### bower i bpopup  ######*/
	// Add class hide
	// $('.section-main-form button').click(function(){
	//	$('.section-modal').bPopup({
	// 			closeClass:'section-modal-but',
	//			position:['auto','auto'], // position center
	//			follow: [true,false],
	// 	}); 
	//})


	/* ###### init stickUp  ######*/
	/* ###### bower i sticky  ######*/
	/*$("#sticker").sticky({topSpacing:0});*/


	/* ###### init OwlCarousel2  ######*/
	/*!!! add class .owl-carousel !!!*/
	/* ###### bower i OwlCarousel2 ######*/
	// $("#owl-example").owlCarousel({
	//  	items : 1,
	//		responsive : {
	//		 		0:{
	//				 	items : 1
	//			 	},
	//			 	768:{
	//				 	items : 2
	//			 	},
	//			 	960:{
	//				 	items : 2
	//			 	},
	//			 	
	//		  },
	//  	margin:50,
	//  	autoHeight : true,
	//  	dots: false,
	//  	autoplay : true,
	//  	singleItem:true,
	//  	nav:true,
	// 		navText:['<i class="fa fa-arrow-circle-o-left"></i>','<i class="fa fa-arrow-circle-o-right"></i>']
	//  	}
	//  ); 
	//		.owl-next,
	//		.owl-prev
	//			position absolute
	//			top 50%
	//			margin-top -20px
	//			
	//		.owl-carousel
	//			position relative
	//		.owl-prev
	//			left -5%
	//		.owl-next
	//			right -5%
	//

	
	/* ###### init validate form  ######*/
	/* ###### bower i jquery-validation ######*/
	/*$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},
				
			}
			submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
	})*/

	/* ###### init animatedModal  ######*/
	/* ###### bower i animatedModal  ######*/
	// $(".play").animatedModal({
	//  	 animatedIn:'lightSpeedIn',
	//     animatedOut:'bounceOutDown',
	//     color:'#0394c7'
	//  	});

	/* ###### init responsive-tabs  ######*/
	/* ###### bower i responsive-tabs  ######*/
/*    $('#horizontalTab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        active: 0
        
    });*/

	/* ###### init fancybox  ######*/
	/* ###### bower i fancybox  ######*/
	// $(".play").fancybox();
	// a(href="img/item-house-1.png" rel="group-element(для объединения в группу)") - image in a
	//	img(src="img/item-house-1.png", alt="")
	
	/* ###### init scrollup  ######*/
	/* ###### bower i scrollup  ######*/
	/*http://www.jqueryscript.net/animation/Customizable-Back-To-Top-Button-with-jQuery-backTop.html*/
	// $('.write-review-arrow').backTop();
	
})