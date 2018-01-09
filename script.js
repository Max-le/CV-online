// Html code for email
var emailhtml = "<a id='email' hidden='true' href='mailto:max.09@outlook.com'> max.09@outlook.com</a>"


	//  Jquery stuff 
	//.ready method is triggered when page is loaded.
	$(document).ready(function(){
		$("#btnemail").click(function() {
			
			//Remplacer button par emailhtml
			$("#btnemail").replaceWith(emailhtml);
		  	$("#email").slideDown();

		});
	});
	// end jQuery stuff
