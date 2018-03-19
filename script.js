// Html code for email
var emailhtml = "<a id='email' hidden='true' href='mailto:max.09@outlook.com'> max.09@outlook.com</a>"
    

      jQuery( function() {
    jQuery( "a" ).tooltip({show: {delay:150 }});


  } );
jQuery(document).ready(function(){

	console.log("document ready !");

	jQuery("button-mail").click(function(){

        //Remplacer button par emailhtml
        jQuery("button").replaceWith(emailhtml);
        jQuery("#email").slideDown();


        		});

});
