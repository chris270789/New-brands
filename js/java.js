/*$('#sb-slider').slicebox({
	cuboidsCount : 1,
	orientation : 'r'
	slideshow           : true,

});
*/
/*SLIDER*/
$(function() {
				
				var Page = (function() {

					var $navArrows = $( '#nav-arrows' ).hide(),
						$shadow = $( '#shadow' ).hide(),
						slicebox = $( '#sb-slider' ).slicebox( {
							onReady : function() {

								$navArrows.show();
								$shadow.show();

							},
							orientation : 'r',
							cuboidsRandom : true,
							slideshow  : true,
							slideshowTime   :1000

						} ),
						
						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':first' ).on( 'click', function() {

								slicebox.next();
								return false;

							} );

							$navArrows.children( ':last' ).on( 'click', function() {
								
								slicebox.previous();
								return false;

							} );

						};

						return { init : init };

				})();

				Page.init();

			});

/*SCROLL-DOWN*/
 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#iPad').offset().top }, 'slow');
      return false;
    });
  });
  
  /*NAVIGATION*/
$(document).scroll(function(){
  	if($(document).scrollTop()>$('.slider_block').height()+10)
  		$('nav').addClass('position-fixed'),
  		$('#navbarSupportedContent').removeClass('ml-auto'),
  		$(' nav a.nav_image_link').addClass('offset-1'),
  		$(' nav ul.navbar-nav').addClass('mr-auto'),
  		$('nav').addClass('sticky');
  		else 
  		$('nav').removeClass('position-fixed'),
  		$('#navbarSupportedContent').addClass('ml-auto'),
  		$(' nav a.nav_image_link').removeClass('offset-1'),
  		$(' nav ul.navbar-nav').removeClass('mr-auto'),
  		$('nav').removeClass('sticky');
 
  });
  
  
  
  /*COUNTS*/
var time = 3,cc=1;
$(window).scroll(function(){
$('#counter').each(function(){
	var
	cPos=$(this).offset().top,
	topWindow=$(window).scrollTop();
	if (cPos<topWindow+300){
		if(cc<2){
		$('.numeral').addClass('viz');	
			  $('div').each(function(){
		    var 
		    i = 1,
		    num = $(this).data('num'),
		    step = 1000 * time / num,
		    that = $(this),
		    int = setInterval(function(){
		      if (i <= num) {
		        that.html(i);
		      }
		      else {
		      	cc=cc+2;
		        clearInterval(int);
		      }
		      i++;
		    },step);
		  });
					}
					}
  
});  
});
$('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
         slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
 // dots: true,

  focusOnSelect: true
             }
    }] 
    });
  /*SLICK-SLIDER-2
$('.slick-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
             }
    }] 
});

*/




$("a.gallery_link").click(function(){
$(".gallery_link").removeClass("green"),
$ (".gallery_link").css ("color", "#e5e5e5")  ;
  //Удаляем класс у прошлого выделенного
 $(this).addClass("green"); //добовляем класс
   $ (".gallery_link.green").css ("color", "#00e7b4")  ;
  });	
 
/*gallery-MASONRY*/
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});


////gallery-FILTR
$(function(){
	var $grid = $('.grid').masonry({
  // options...
});
  $('#all').click(function(){
    $('.gallery_item').show();
     $('.grid').masonry({}); 
     $grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
    return false;
  });
  
  
  
  $('#video').click(function(){
    $('.gallery_item').show();
    $('.gallery_item').not('.video').hide();
    if ($('.gallery_item').not('.video'))
     $('.grid').masonry({
     itemSelector: '.grid-item',
  columnWidth:0});
    return false;
  });
  
  $('#web').click(function(){
    $('.gallery_item').show();
    $('.gallery_item').not('.web').hide();
    if ($('.gallery_item').not('.web'))
     $('.grid').masonry({
     itemSelector: '.grid-item',
  columnWidth:0});
    return false;
  });
  
  $('#design').click(function(){
    $('.gallery_item').show();
    $('.gallery_item').not('.design').hide();
    if ($('.gallery_item').not('.design'))
     $('.grid').masonry({
     itemSelector: '.grid-item',
  columnWidth:0});
    return false;
  });
  
  $('#photo').click(function(){
    $('.gallery_item').show();
    $('.gallery_item').not('.photo').hide();
    if ($('.gallery_item').not('.photo'))
     $('.grid').masonry({
     itemSelector: '.grid-item',
  columnWidth:0});
    //$ (".grid-item") .css ("width", "0") ;
   // else
   // $ (".grid-item") .css ("width", "20%") ;
    return false;
    
  });
  
   $('#music').click(function(){
    $('.gallery_item').show();
   $('.gallery_item').not('.music').hide();
    if ($('.gallery_item').not('.music'))
   // $(this).addClass("d-none"),
      $('.grid').masonry({
     itemSelector: '.grid-item',
  columnWidth:0});
 
    return false;
  });
  
});
////////////////GRADIENT
/*var originalBG = '',
    lightColor = 'rgba(53,253,144,1)',
    gradientSize = 5;

$('.video_block_hover')
.mousemove(function(e) {
    originalBG = $("video_block_hover").css("background-color");
    x  = e.pageX - this.offsetLeft;
    y  = e.pageY - this.offsetTop;
    xy = x + " " + y;

    bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(53,253,144,0.8), to(rgba(53,253,144,0))), " + originalBG;
    bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

    $(this)
      .css({ background: bgWebKit })
      .css({ background: bgMoz });

}).mouseleave(function() {
        $(this).css({ background: originalBG });
});*/



/*SCROLL-UP*/
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    });
    $('#scrollup').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
/*MAP*/
function initMap() {
        var element = document.getElementById('map');
        var options = {
          zoom: 8,
          center: {	lat:50.434341,lng:30.527756	  }
        				};
        var myMap = new google.maps.Map(element,options);
        
        var marker = new google.maps.Marker({
          position:{	lat:50.434341,lng:30.527756	  },
          map: myMap
        });

      }



