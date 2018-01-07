// Html code for email
var emailhtml = "<a id='email' hidden href='mailto:max.09@outlook.com'> max.09@outlook.com</a>"
	
	
	//  Jquery stuff 

	//.ready method is triggered when page is loaded.
	$(document).ready(function(){
		$("button").click(function() {
			$("#email").slideDown();
			$("button").hide();


		});
	});

