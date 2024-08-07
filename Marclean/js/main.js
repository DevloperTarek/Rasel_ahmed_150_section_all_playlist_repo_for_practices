

// const text_field = document.querySelector('#text_field');
// const submit_btn = document.querySelector('#show_data_from_input');
// const recordData = document.querySelector('#record');


// // add data as json object
// let users_dara_arr = [];

// let getValueFromLoCalStroage = localStorage.getItem('user_');
// if(users_dara_arr != null ){
// 	users_dara_arr = JSON.parse(getValueFromLoCalStroage);
// }
// show_data_on_table();
// submit_btn.addEventListener('click',()=>{
// 	let input_fleld_value = text_field.value;
// 	console.log(input_fleld_value);
// 	users_dara_arr.push({'name': input_fleld_value});
// 	saveData(users_dara_arr);
// 	text_field.value = "";
// })

// function saveData(users_dara_arr){
// 	let saveDta = JSON.stringify(users_dara_arr);
// 	localStorage.setItem('user_',saveDta);
// }

// function show_data_on_table(){
// 	let arras_single_value_ = "";
// 	users_dara_arr.forEach((user,index)=>{
// 		arras_single_value_ += `<tr>
//                              <th scope="row">${index++}</th>
//                              <td>${user.name}</td>
//                              <td><i class="fas fa-edit"></i></td>
//                              <td><i class="fas fa-trash-alt"></i></td>
//                            </tr>`
// 	});
// 	recordData.innerHTML = arras_single_value_;
// }





















// let userArr = [];

// let getValueFromLocalStroage = localStorage.getItem('users');
// console.log(getValueFromLocalStroage);
// if(userArr != null){
// 	userArr = JSON.parse(getValueFromLocalStroage);
// }

// display_data();
// submit_btn.addEventListener('click',()=>{
// 	let passTheValueFromInpur = text_field.value;
// 	userArr.push({'name': passTheValueFromInpur});
// 	savaInfo(userArr);
// 	text_field.value = '';
// });


// function savaInfo(userArr){
// 	let save = JSON.stringify(userArr)
// 	localStorage.setItem('users',save);
// 	console.log(typeof(save));
// }
// function display_data(){
// 	let show_data_vari = "";
// 	userArr.forEach((user)=>{
// 		show_data_vari += `<tr>
//                              <th scope="row"></th>
//                              <td>${user.name}</td>
//                              <td><i class="fas fa-edit"></i></td>
//                              <td><i class="fas fa-trash-alt"></i></td>
//                            </tr>`
// 	})
// 	recordData.innerHTML = show_data_vari;
// }











(function ($) {
"use strict";

// preloader

$(window).on("load",function(){
	$("#preloader").fadeOut(1000);
   });


$(".video-popup-btn").magnificPopup({
	type: 'iframe',
 });

// mean-menu

// menu_btn.addEventListener('click',()=>{
// 	menu_btn.classList.toggle('fa-times');
// 	menu_btn_toggler.classList.toggle('active');
// })
//  bootstrap video modal
$('.biling_btn').on('click',function(){
	let video_src = 'http://www.youtube.com/v/FSi2fJALDyQ&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', video_src)
})
//  bootstrap video modal

// meanmenu
// $('.mobile_menu').meanmenu({
// 	meanMenuContainer: '.mobile_menu',
// 	meanScreenWidth: "1024"
// });

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".sticky_header").removeClass("sticky");
	} else {
		$(".sticky_header").addClass("sticky");
	}
});

// video-one use for datepicker js
// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel
$('.banner_carousel_list').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
	items:1,
	nav:false,
	// navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	dots:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.video_popup_active').magnificPopup({
	type: 'iframe'
})

// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// malware problems
$('.customer_carousel_list_wrap_two').owlCarousel({
	loop:true,
    margin:20,
    autoplay:true,
    autoplay:Infinity,
	items:2,
	nav:false,
	autoPlay: 100,
	smartSpeed: 300,
    //autoPlay: true, <-- if you want to set default slide time (5000)

    slideSpeed: 100,
	// navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	dots:true,
    responsive:{
        0:{
            items:1,
		  loop:true
        },
        767:{
            items:2,
		  loop:true
        },
        992:{
            items:2,
		  loop:true
        }
    }
})
$('.customer_carousel_list_wrap').owlCarousel({
	loop:true,
    margin:20,
    autoplay:true,
    autoplay:Infinity,
	items:3,
	nav:false,
	autoPlay: 100,
	smartSpeed: 300,
    //autoPlay: true, <-- if you want to set default slide time (5000)

    slideSpeed: 100,
	// navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	dots:true,
    responsive:{
        0:{
            items:1,
		  loop:true
        },
        767:{
            items:3,
		  loop:true
        },
        992:{
            items:3,
		  loop:true
        }
    }
})


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);