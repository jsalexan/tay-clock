let myConcert = JSON.parse(localStorage.getItem("concertDate")) || [];


let countDownDate = new Date("Dec 13, 2023 13:13:13").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("clock").innerHTML = 
  days + " days <br>" 
  + hours + " hours <br>"
  + minutes + " minutes <br>" + seconds + " seconds ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "SHOW TIME!";
  }
}, 1000);





const form = document.getElementById("date-select");
const dropdown = document.getElementById("dropdown-content");

form.addEventListener("submit", function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
 

  // Get selected option value
  const selectedValue = dropdown.value;

  // Save selected value to local storage
  localStorage.setItem("selectedOption", selectedValue);
});