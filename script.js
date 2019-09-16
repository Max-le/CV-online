var count_clicks = 0 ;

jQuery(document).ready(function(){
	
	console.log("document ready !");
	
	jQuery("#TOEFL").click(function(){
		jQuery("#toefl_scores").slideToggle();
	});
	jQuery("#name").click(function(){
		var newcolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		console.log('New color value :')
		console.log(newcolor)
		
		count_clicks = count_clicks + 1
		console.log("clicks on name : ", count_clicks);
		if (count_clicks == 15) {
			console.log('EASTER EGG !!!')
			/*Launch game*/
			window.open("snake.html","_self")
			
			
		}
		
		$(this).css('color', newcolor);
		
		
	});
	
	
});
