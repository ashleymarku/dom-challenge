function clickMe(){
	var list=document.getElementsByTagName("p");

	list[0].style.backgroundColor="green";
	list[1].style.backgroundColor="pink";
	list[2].style.backgroundColor="red";
	list[3].style.backgroundColor="blue";

}


var num = 12345678

function grab() {
	
	var user = document.forms["sup"]["userName"].value;
	var email1 = document.forms["sup"]["email"].value;
	var pass = document.forms["sup"]["password"].value;

	

	if(pass== num){
		

		alert("congrats you logged in!!");
		document.getElementById("H").innerHTML = "PEANUTS!";
		console.log(document.getElementById("H"));



	}
	else{
		alert("Incorrect password! Try again");
	}
}