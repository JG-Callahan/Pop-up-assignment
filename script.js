function myFunction() {
	window.prompt("Please enter your name.","");
	var txt;
	if (confirm("Please confirm.")) {
	txt = "Welcome to the real world!";
	} 
	else {
	txt = "Hope you will sign up next time.";
	}
	document.getElementById("text").innerHTML = txt;
}

