$.noConflict();

jQuery(document).ready(function(){   
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 0) {
            jQuery('#scroller').fadeIn();
        } else {
            jQuery('#scroller').fadeOut();
        }
    });
    jQuery('#scroller').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

jQuery(document).ready(function(){
  jQuery('.bxslider').bxSlider({
      slideWidth: 270,
      minSlides: 3,
      maxSlides: 4,
      slideMargin: 10,
      auto: true,
      navigation: true,
      speed: 2000
  });

});

jQuery(function(){
    jQuery(window).scroll(function() {
        var top = jQuery(document).scrollTop();
        if (top < 100) jQuery(".top-menu").css({top: '0', position: 'relative'});
        else jQuery(".top-menu").css({width: '100%', top: '0px', position: 'fixed', zIndex: '10000'});
    });
});

//1
    jQuery(document).ready(function() {
        jQuery(".modalbox").fancybox();
        jQuery("#contact").submit(function() { return false; });

        
        jQuery("#send").on("click", function(){
            var emailval  = jQuery("#email").val();
            var emaillen    = emailval.length;
            var msgval    = jQuery("#msg").val();
            var msglen    = msgval.length;
			var telval    = jQuery("#tel").val();
            var tellen    = telval.length;
      

            if(emaillen < 4) {
                jQuery("#email").addClass("error");
            }
            else if(msglen >= 4){
                jQuery("#email").removeClass("error");
            }

            if(msglen < 4) {
                jQuery("#msg").addClass("error");
            }
            else if(msglen >= 4){
                jQuery("#msg").removeClass("error");
            }
			
			if(tellen < 4) {
                jQuery("#tel").addClass("error");
            }
            else if(tellen >= 4){
                jQuery("#tel").removeClass("error");
            }
                         
            
            if( msglen >= 4 && emaillen >= 4 && tellen >= 4 ) {
                // если обе проверки пройдены
                // сначала мы скрываем кнопку отправки
                jQuery("#send").replaceWith("<em>отправка...</em>");
                
                jQuery.ajax({
                    type: 'POST',
                    url: 'http://zeligen.com/templates/zeligen/sendmessage.php',
                    data: jQuery("#contact").serialize(),
                    success: function(data) {
                        if(data == "true") {
                            jQuery("#contact").fadeOut("fast", function(){
                                jQuery(this).before("<p><strong>Спасибо! Ваше сообщение отправлено.</strong></p>");
                                setTimeout("$.fancybox.close()", 1000);
                            });
                        }
                    }
                });
            }
        });
    });
	
	//1
    jQuery(document).ready(function() {
        jQuery(".modalbox").fancybox();
        jQuery("#contact2").submit(function() { return false; });

        
        jQuery("#send2").on("click", function(){
            var emailval  = jQuery("#email2").val();
            var emaillen    = emailval.length;
            var msgval    = jQuery("#msg2").val();
            var msglen    = msgval.length;
			var textval    = jQuery("#text2").val();
            var textlen    = textval.length;
      

            if(emaillen < 4) {
                jQuery("#email2").addClass("error");
            }
            else if(msglen >= 4){
                jQuery("#email2").removeClass("error");
            }

            if(msglen < 4) {
                jQuery("#msg2").addClass("error");
            }
            else if(msglen >= 4){
                jQuery("#msg2").removeClass("error");
            }
			
			if(textlen < 4) {
                jQuery("#text2").addClass("error");
            }
            else if(textlen >= 4){
                jQuery("#text2").removeClass("error");
            }
                         
            
            if( msglen >= 4 && emaillen >= 4) {
                // если обе проверки пройдены
                // сначала мы скрываем кнопку отправки
                jQuery("#send2").replaceWith("<em>отправка...</em>");
                
                jQuery.ajax({
                    type: 'POST',
                    url: 'http://zeligen.com/templates/zeligen/sendmessage2.php',
                    data: jQuery("#contact2").serialize(),
                    success: function(data) {
                        if(data == "true") {
                            jQuery("#contact2").fadeOut("fast", function(){
                                jQuery(this).before("<p><strong>Спасибо! Ваше сообщение отправлено.</strong></p>");
                                setTimeout("$.fancybox.close()", 1000);
                            });
                        }
                    }
                });
            }
        });
    });


jQuery(document).ready(function(){

        jQuery("#menu").on("click","a", function (event) {

            

            event.preventDefault();

     


            var id  = jQuery(this).attr('href'),

     

                top = jQuery(id).offset().top;

             


            jQuery('body,html').animate({scrollTop: top}, 1500);

        });

    });