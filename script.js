var count_clicks = 0 ;

jQuery(document).ready(function(){
	
	console.log("document ready !");
	
	jQuery("#TOEFL").click(function(){
		jQuery("#toefl_scores").slideToggle();
	});
	$( function() {
		$( document ).tooltip();
	  } );
	jQuery("#name").click(function(){
		// var newcolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		// console.log('New color value :')
		// console.log(newcolor)
		count_clicks = count_clicks + 1
		// console.log("clicks on name : ", count_clicks);
		if (count_clicks == 1 ) {
			$('#name').off('click');
			console.log('EASTER EGG !!!');
			$('#name').effect('pulsate');
			$('#iconCard').effect('shake', {direction:"up"});
			$('#iconCard').animate({color:'black'},800, function name(params) {
				$('#iconGit').effect('shake', {direction:"up"});

				$('#iconGit').animate({color:'yellow'},800, function name(params) {
					$('#iconIn').effect('shake', {direction:"up"});
					$('#iconIn').animate({color:'red'},800);
					$("#name").animate({color:'#3388DD'},5000);

					
				})
			})		
			
		}
		
		$(this).css('color', newcolor);
		
		
	});
	
	
});
