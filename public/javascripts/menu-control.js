
 
$(document).ready(function() {
	function positionLightboxImage() {
	  var top = ($(window).height() - $('#lightbox').height()) / 2;
	  var left = ($(window).width() - $('#lightbox').width()) / 2;
	  $('#lightbox')
	    .css({
	      'top': top + $(document).scrollTop(),
	      'left': left
	    })
	    .fadeIn();
	}

	function removeLightbox() {
	  $('#overlay, #lightbox')
	    .fadeOut('slow', function() {
	      $(this).remove();
	      $('body').css('overflow-y', 'auto'); // show scrollbars!
	    });
	}
	$('a.lightbox').click(function(e) {
		$('embed').remove();
	 $('body').append('<embed src="page_sound.wav" autostart="true" hidden="true" loop="false">');
    $('body').css('overflow-y', 'hidden'); // hide scrollbars!

    $('<div id="overlay"></div>')
      .css('top', $(document).scrollTop())
      .css('opacity', '0')
      .animate({'opacity': '0.7'}, 'slow')
      .appendTo('body');

    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');

    $('<img />')
      .attr('src', $(this).attr('href'))
      .load(function() {
        positionLightboxImage();
      })
      .click(function() {
        removeLightbox();
      })
      .appendTo('#lightbox');

    return false;;
	});
	//=====GALLERY CONTROL====================
	(function($){

	    if(!$.omr){
	        $.omr = new Object();
	    };

	    $.omr.mosaic = function(el, options){

	        var base = this;

	        // Access to jQuery and DOM versions of element
	        base.$el = $(el);
	        base.el = el;

	        // Add a reverse reference to the DOM object
	        base.$el.data("omr.mosaic", base);

	        base.init = function(){
	            base.options = $.extend({},$.omr.mosaic.defaultOptions, options);

	            base.load_box();
	        };

	        // Preload Images
	        base.load_box = function(){
	        	// Hide until window loaded, then fade in
				if (base.options.preload){
					$(base.options.backdrop, base.el).hide();
					$(base.options.overlay, base.el).hide();

					$(window).load(function(){
						// IE transparency fade fix
						if(base.options.options.animation == 'fade' && $(base.options.overlay, base.el).css('opacity') == 0 ) $(base.options.overlay, base.el).css('filter', 'alpha(opacity=0)');

						$(base.options.overlay, base.el).fadeIn(200, function(){
							$(base.options.backdrop, base.el).fadeIn(200);
						});

						base.allow_hover();
					});
				}else{
					$(base.options.backdrop, base.el).show();
					$(base.options.overlay , base.el).show();
					base.allow_hover();
				}
	        };

	        // Initialize hover animations
	        base.allow_hover = function(){
	        	// Select animation
				switch(base.options.animation){

					// Handle fade animations
					case 'fade':
						$(base.el).hover(function () {
				        	$(base.options.overlay, base.el).stop().fadeTo(base.options.speed, base.options.opacity);
				        },function () {
				        	$(base.options.overlay, base.el).stop().fadeTo(base.options.speed, 0);
				      	});

				    	break;

				    // Handle slide animations
		      		case 'slide':
		      			// Grab default overlay x,y position
						startX = $(base.options.overlay, base.el).css(base.options.anchor_x) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_x) : '0px';
						startY = $(base.options.overlay, base.el).css(base.options.anchor_y) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_y) : '0px';;

				      	var hoverState = {};
				      	hoverState[base.options.anchor_x] = base.options.hover_x;
				      	hoverState[base.options.anchor_y] = base.options.hover_y;

				      	var endState = {};
				      	endState[base.options.anchor_x] = startX;
				      	endState[base.options.anchor_y] = startY;

						$(base.el).hover(function () {
				        	$(base.options.overlay, base.el).stop().animate(hoverState, base.options.speed);
				        },function () {
				        	$(base.options.overlay, base.el).stop().animate(endState, base.options.speed);
				      	});

				      	break;
				};
	        };

	        // Make it go!
	        base.init();
	    };

	    $.omr.mosaic.defaultOptions = {
	        animation	: 'fade',
	        speed		: 150,
	        opacity		: 1,
	        preload		: 0,
	        anchor_x	: 'left',
	        anchor_y	: 'bottom',
	        hover_x		: '0px',
	        hover_y		: '0px',
	        overlay  	: '.mosaic-overlay',	//Mosaic overlay
			backdrop 	: '.mosaic-backdrop'	//Mosaic backdrop
	    };

	    $.fn.mosaic = function(options){
	        return this.each(function(){
	            (new $.omr.mosaic(this, options));
	        });
	    };

	})(jQuery);
	//============MAIN MENU==============
	//======MAIN MENU BTN
   //When mouse rolls over  
   $("ul.menu li").mouseover(function(){
       $(this).stop().animate({height:'120px'},{queue:false, duration:150})
 
   });  
 
   //When mouse is removed  
   $("ul.menu li").mouseout(function(){  
       $(this).stop().animate({height:'33px'},{queue:false, duration:300})  
			 
   });

	//=========PAGE ANIMATION
	$('.main-content-2').slideToggle('fast');
	$('.main-content-3').slideToggle('fast');
	$('.main-content-4').slideToggle('fast');
	$('.main-content-5').slideToggle('fast');
	$('.main-content-6').slideToggle('fast');
function open_page(page,banner){
	$('.slider-inside-presentation').animate(
			{opacity: 0},'fast','swing'
	);
	$('.gallery-image').animate(
				{opacity: 0},
				'fast',
				'swing'
			);
	if($(".main-content-1").css("display") == "block"){
			$('.main-content-1').slideToggle('slow');
	};
	if($(".main-content-2").css("display") == "block"){
			$('.main-content-2').slideToggle('slow');
	};
	if($(".main-content-3").css("display") == "block"){
			$('.main-content-3').slideToggle('slow');
	};
	if($(".main-content-4").css("display") == "block"){
			$('.main-content-4').slideToggle('slow');
	};
	if($(".main-content-5").css("display") == "block"){
			$('.main-content-5').slideToggle('slow');
	};
	if($(".main-content-6").css("display") == "block"){
			$('.main-content-6').slideToggle('slow');
	};
	if($("#banner-1").css("margin-left") == "0px"){
		 $('#banner-1').animate(
			{'margin-left': '-2000px'}
			,'fast'
			,'linear'
		);
	};
	if($("#banner-2").css("margin-left") == "0px"){
		 $('#banner-2').animate(
			{'margin-left': '-2000px'}
			,'fast'
			,'linear'
		);
	};
	if($("#banner-3").css("margin-left") == "0px"){
		 $('#banner-3').animate(
			{'margin-left': '-2000px'}
			,'fast'
			,'linear'
		);
	};
	if($("#banner-4").css("margin-left") == "0px"){
		 $('#banner-4').animate(
			{'margin-left': '-2000px'}
			,'fast'
			,'linear'
		);
	};
	if($("#banner-5").css("margin-left") == "0px"){
		 $('#banner-5').animate(
			{'margin-left': '-2000px'}
			,'fast'
			,'linear'
		);
	};
	if($("#banner-6").css("margin-left") == "0px"){
		 $('#banner-6').animate(
			{'margin-left': '-2000px'}
			,'fast'
			,'linear'
		);
	};
	//alert(banner);
	 $(banner).animate(
		{'margin-left': '0px'}
		,'fast'
		,'linear'
	);
	if($(page).css("display") == "none"){
			$(page).slideToggle('slow');
	};
	$('.gallery-image').delay(400).animate(
				{opacity: 1},
				'slow',
				'swing'
			);
	$('.slider-inside-presentation').delay(500).animate(
			{opacity: 1},'slow','swing'
	);		
};

	$('#main-1-link').click(function(){
		if($(".main-content-1").css("display") == "none"){
				open_page(".main-content-1","#banner-1");
		}	
	});

	$('#main-2-link').click(function(){
	  if($(".main-content-2").css("display") == "none"){
				open_page(".main-content-2","#banner-2");				
		}
	});

	$('#main-3-link').click(function(){
	  if($(".main-content-3").css("display") == "none"){
				open_page(".main-content-3","#banner-3");				
		}		
	});	

	$('#main-4-link').click(function(){
	  if($(".main-content-4").css("display") == "none"){
				open_page(".main-content-4","#banner-4");				
		}		
	});

	$('#main-5-link').click(function(){
	  if($(".main-content-5").css("display") == "none"){
				open_page(".main-content-5","#banner-5");				
		}		
	});	

	$('#main-6-link').click(function(){
	  if($(".main-content-6").css("display") == "none"){
				open_page(".main-content-6","#banner-6");				
		}		
	});
	
});

//===============
