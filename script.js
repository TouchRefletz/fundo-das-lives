const background = document.getElementById('background');

function randomMovement() {
  const x = Math.random() * 50 - 25; // random number between -25 and 25
  const y = Math.random() * 50 - 25; // random number between -25 and 25

  background.style.transform = `translate(${x}%, ${y}%)`;

  setTimeout(randomMovement, 10000); // change position every 5 seconds
}

randomMovement();
