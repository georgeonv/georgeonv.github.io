function invertColors() {
  document.body.classList.toggle("inverted");

  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
  }
}

