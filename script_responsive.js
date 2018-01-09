// Html code for email
var emailhtml = "<a id='email' hidden='true' href='mailto:max.09@outlook.com'> max.09@outlook.com</a>"
    
jQuery(document).ready(function(){

	console.log("document ready !");

	jQuery("button").click(function(){

		jQuery("button").css('color', 'orange');
        //Remplacer button par emailhtml
        jQuery("button").replaceWith(emailhtml);
        jQuery("#email").slideDown();


        		});

});
