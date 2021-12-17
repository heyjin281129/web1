const body = document.querySelector(".purple");

const purple = "purple";
const blue = "blue";
const yellow = "yellow";

function handleResize() {
  const ScreenWidth = window.innerWidth;

  if (ScreenWidth >= 1000) {
    body.classList.remove(purple, blue);
    body.classList.add(yellow);
  } else if (ScreenWidth <= 500) {
    body.classList.remove(yellow, purple);
    body.classList.add(blue);
  } else {
    body.classList.remove(blue, yellow);
    body.classList.add(purple);
  }
  console.log(ScreenWidth);
}

window.addEventListener("resize", handleResize);
