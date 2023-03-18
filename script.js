function pluralize(word, count) {
  if (count === 1) {
    return word;
  } else {
    return word + "s";
  }
}

let myTime = localStorage.getItem("selectedOption") || ["Dec 13, 2023 13:13:13"];
let countDownDate = new Date(myTime).getTime();

let timeLeft = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display time until concert day and pluralize if necessary
  document.getElementById("clock").innerHTML = 
  days + " " + pluralize("day", days) + "<br>" 
  + hours + " " + pluralize("hour", hours) + "<br>"
  + minutes + " " + pluralize("minute", minutes) + "<br>"
  + seconds + " " + pluralize("second", seconds) + " ";

  if (distance < 0) {
    clearInterval(timeLeft);
    document.getElementById("clock").innerHTML = "TODAY IS THE DAY!";
  }
}, 1000);

// Function to submit form and save selection
const form = document.getElementById("date-select");
const dropdown = document.getElementById("dropdown-content");

form.addEventListener("submit", function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get selected option value
  const selectedValue = dropdown.value;

  // Save selected value to local storage
  localStorage.setItem("selectedOption", selectedValue);

  // Delay page load by 2 seconds
  setTimeout(function(){
    window.location.assign('/tay-clock/clock.html');
  }, 1000);
});


// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token = 'BQCMmjAApRsHB88PFsOw_1jdcNJWdf-IKL6agYeL8kVsy7pMsf2_Z5YgXdiPmmgGV9LWsxhbVkj8ILIDGlrEWFMRsN9rlyAbi26gMXYkXp4rP5ake0etoPsX9zoY03fMfF9xwZKXQm8mzo92-pmGdg_3K3GXSpi6QqoIiatCJ73VqOC2HSNWZ-Mn8wjenpQDp01qBs_WE8sx5U5VejfPPOpE';
//   const player = new Spotify.Player({
//       name: 'Web Playback SDK Quick Start Player',
//       getOAuthToken: cb => { cb(token); },
//       volume: 0.5
//   });

//   // Ready
//   player.addListener('ready', ({ device_id }) => {
//       console.log('Ready with Device ID', device_id);
//   });

//   // Not Ready
//   player.addListener('not_ready', ({ device_id }) => {
//       console.log('Device ID has gone offline', device_id);
//   });

//   player.addListener('initialization_error', ({ message }) => {
//       console.error(message);
//   });

//   player.addListener('authentication_error', ({ message }) => {
//       console.error(message);
//   });

//   player.addListener('account_error', ({ message }) => {
//       console.error(message);
//   });

//   document.getElementById('togglePlay').onclick = function() {
//     player.togglePlay();
//   };

//   player.connect();
// }