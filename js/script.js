$( "#{{Hero.id}}" ).click(function() {
  alert( "Handler for .click() called." );
});

  $(document).ready(function(){
        $(window).bind('scroll',function(e){
            parallaxScroll();
          });
          function parallaxScroll(){
            var scrolledY = $(window).scrollTop();
          $('.top').css('background-position','center -'+((scrolledY*0.8))+'px');
          }     
      });


$(document).ready(function(){

  // hide #back-top first
  $("#back-top").hide();
  
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
});