function invertColors() {
  document.body.classList.toggle("inverted");
}

const button = document.querySelector("button");

function randomizeShadows() {
  for (let i = 0; i <= 3; i++) {
    document.documentElement.style.setProperty(`--Cshadow${i}`, Math.floor(Math.random()*20 + 5) + "px");
    document.documentElement.style.setProperty(`--Pshadow${i}`, Math.floor(Math.random()*20 + 5) + "px");
  }
}

setInterval(randomizeShadows, 5000);
