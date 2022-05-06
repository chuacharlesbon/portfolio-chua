setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("time").innerHTML=
  "Time: " +
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning!";
} else if (time < 18) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}
document.getElementById("greet").innerHTML = greeting;





let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

console.log(document)
const txtFirstName = document.querySelector("#input-metric")

const spanFullName = document.querySelector("#output-metric")

const spanFullName2 = document.querySelector("#output-english")

const txtLastName = document.querySelector("#input-english")

txtFirstName.addEventListener('keyup', (event)  => {
  spanFullName.innerHTML = txtFirstName.value*1000 + " " + "millimeters";
  spanFullName2.innerHTML = txtFirstName.value*3.28084 + " " + "feet";
  txtLastName.setAttribute("disabled", true)
})
   
txtFirstName.addEventListener('keyup', (event)  => {
  console.log(event.target);
  console.log(event.target.value);
})

txtLastName.addEventListener('keyup', (event)  => {
  spanFullName.innerHTML = txtLastName.value*0.3048 + " " + "meters";
  spanFullName2.innerHTML = txtLastName.value*0.333333 + " " + "yards";
  txtFirstName.setAttribute("disabled", true)
})

txtLastName.addEventListener('keyup', (event)  => {
  console.log(event.target);
  console.log(event.target.value);
})

const eng = document.getElementById("use-eng")

const met = document.getElementById("use-met")

const reset = document.getElementById("reset")

met.onclick = function() {
 txtFirstName.removeAttribute("disabled")
 txtLastName.value = ""
}
eng.onclick = function() {
 txtLastName.removeAttribute("disabled")
 txtFirstName.value = ""
}






