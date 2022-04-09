//alert("hi")
function lightmode() {
	let element = document.body

	document.getElementById("navbar").style.backgroundColor = "white";
	document.getElementById("firstCol").style.backgroundColor = "white";
	document.getElementById("firstCol").style.borderRadius = "0";
	document.getElementById("secondCol").style.backgroundColor = "white";
	document.getElementById("aboutbody").style.backgroundColor = "white";
	document.getElementById("aboutcontent").style.color = "black"
	document.getElementById("headAbout").style.backgroundColor = "white";
	document.getElementById("headAbout").style.color = "black";
	document.getElementById("project").style.backgroundColor = "white";
	document.getElementById("project").style.color = "black";
	document.getElementById("tool").style.backgroundColor = "white";
	document.getElementById("tool").style.color = "black";
	document.getElementById("headContact").style.backgroundColor = "white";
	document.getElementById("headContact").style.color = "black";
	document.getElementById("menuIcon").style.backgroundColor = "gray";
	//element.style.backgroundImage = null
	//element.style.backgroundColor = "white"
	/*document.getElementById("headAbout").style.borderBottomWidth = "2rem"
	document.getElementById("headAbout").style.borderBottomColor = "black"*/





}

function darkmode() {
	document.getElementById("navbar").style.backgroundColor = "black";
	document.getElementById("firstCol").style.backgroundColor = "black";
	document.getElementById("secondCol").style.backgroundColor = null;
	document.getElementById("aboutbody").style.backgroundColor = "#424949";
	document.getElementById("aboutcontent").style.color = "white"
	document.getElementById("headAbout").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	document.getElementById("headAbout").style.color = "white"
	document.getElementById("project").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	document.getElementById("project").style.color = "white";
	document.getElementById("tool").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	document.getElementById("tool").style.color = "white";
	document.getElementById("headContact").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	document.getElementById("headContact").style.color = "white";
	document.getElementById("menuIcon").style.backgroundColor = "black";



}
