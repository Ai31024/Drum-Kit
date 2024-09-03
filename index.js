// Making audio variables available for each drum sound
let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");
let snare = new Audio("./sounds/snare.mp3");
let crash = new Audio("./sounds/crash.mp3");
let kickBass = new Audio("./sounds/kick-bass.mp3");
let baDumTss = new Audio("./sounds/ba-dum-tss-2s.mp3");

// Selecting the drum logo element by its ID to add an audio effect when clicked
var drumLogo = document.querySelector("#title");

// Adding a click event listener to the drum logo, which will play a sound (baDumTss) when clicked
drumLogo.addEventListener("click", function () {
  baDumTss.play();
});

// Selecting all elements with the class "drum" to check for clicks on drum buttons
var numberOfDrumKeys = document.querySelectorAll(".drum");

// Looping through all drum buttons to add click event listeners to each one
for (i = 0; i < numberOfDrumKeys.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var keyText = this.innerText; // Getting the text content of the clicked drum button (e.g., 'w', 'a', etc.)
    playSound(keyText); // Calling playSound function to play the corresponding sound based on the button pressed
    buttonAnimation(keyText); // Calling buttonAnimation function to add a visual effect to the button
  });
}

// Adding an event listener to the entire document to detect key presses
document.addEventListener("keydown", function (e) {
  playSound(e.key); // Calling playSound function when a key is pressed, passing the key value (e.g., 'w', 'a', etc.)
  buttonAnimation(e.key); // Calling buttonAnimation function to visually highlight the key pressed
});

// Function to play the corresponding sound based on the key/button pressed
function playSound(key) {
  switch (key) {
    case "w":
      tom1.play(); // Play sound for 'w' key/button
      break;
    case "a":
      tom2.play(); // Play sound for 'a' key/button
      break;
    case "s":
      tom3.play(); // Play sound for 's' key/button
      break;
    case "d":
      tom4.play(); // Play sound for 'd' key/button
      break;
    case "j":
      snare.play(); // Play snare sound for 'j' key/button
      break;
    case "k":
      crash.play(); // Play crash sound for 'k' key/button
      break;
    case "l":
      kickBass.play(); // Play kick bass sound for 'l' key/button
      break;
    default:
      console.log(key); // Log the key in the console if it doesn't match any case
      break;
  }
}

// Function to add a visual animation to the button or key being pressed
function buttonAnimation(keyEvent) {
  var keyHighlight = document.querySelector("." + keyEvent); // Select the button element based on the key class (e.g., '.w', '.a')
  keyHighlight.classList.add("pressed"); // Add the "pressed" class to apply the visual effect
  setTimeout(function () {
    keyHighlight.classList.remove("pressed"); // Remove the "pressed" class after 100 milliseconds to reset the button's appearance
  }, 100);
}
