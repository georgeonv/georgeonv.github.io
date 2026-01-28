function invertColors() {
  document.body.classList.toggle("inverted");
}

const button = document.querySelector("button");

button.addEventListener("animationiteration", () => {
  for (let i = 0; i <= 3; i++) {
    document.documentElement.style.setProperty(
      `--Cshadow${i}`,
      Math.floor(Math.random() * 20 + 5) + "px"
    );
    document.documentElement.style.setProperty(
      `--Pshadow${i}`,
      Math.floor(Math.random() * 20 + 5) + "px"
    );
  }
});

