//alert("hi")
function lightmode() {
	let element = document.body

	document.getElementById("navbar").style.backgroundColor = "white";
	document.getElementById("firstCol").style.backgroundColor = "white";
	document.getElementById("big-box").style.backgroundColor = "white";
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
	document.getElementById("maincardOne").style.backgroundColor = "white"
	document.getElementById("maincardTwo").style.backgroundColor = "white"
	document.getElementById("maincardThree").style.backgroundColor = "white"
	document.getElementById("subhead").style.color = "black";
	document.getElementById("subhead2").style.color = "black";
	//element.style.backgroundImage = null
	//element.style.backgroundColor = "white"
	/*document.getElementById("headAbout").style.borderBottomWidth = "2rem"
	document.getElementById("headAbout").style.borderBottomColor = "black"*/
}

function darkmode() {
	document.getElementById("navbar").style.backgroundColor = "black";
	document.getElementById("firstCol").style.backgroundColor = "black";
	document.getElementById("big-box").style.backgroundColor = null;
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
	document.getElementById("maincardOne").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	document.getElementById("maincardTwo").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	document.getElementById("maincardThree").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	document.getElementById("subhead").style.color = "white";
	document.getElementById("subhead2").style.color = "white";

}

const myTimeout = setTimeout(redirect, 11000);

function redirect() {
  document.getElementById("myModal").style.display = "block"
}



