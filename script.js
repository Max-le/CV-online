
jQuery(document).ready(function(){

	console.log("document ready !");

	jQuery("#TOEFL").click(function(){
		jQuery("#toefl_scores").slideToggle();
	});
		jQuery("#name").click(function(){
			var newcolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			console.log('New color value :')
			console.log(newcolor)

			$(this).css('color', newcolor);


	});


});
