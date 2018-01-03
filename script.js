var TodayDate = new Date();
var eutype = TodayDate.toLocaleDateString();
var ustype = TodayDate.toDateString();

document.write(eutype + " = EU format" +"<br>");
document.write(ustype + " = US format" + "<br>");

function ChangeColor () {
	var section = document.getElementsByClassName("section")
	section[0].style.color = 'red';
	section[1].style.color = 'red';
	section[2].style.color = 'red';
	n = section.length
	console.log("Nombres de section(s) : " + n);
	 
	

}

