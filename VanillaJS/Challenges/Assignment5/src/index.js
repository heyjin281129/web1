const body = document.querySelector(".purple");

const PURPLE = "purple";
const BLUE = "blue";
const YELLOW = "yellow";

function handleResize() {
  const ScreenWidth = window.innerWidth;

  if (ScreenWidth >= 1000) {
    body.classList.remove(PURPLE, BLUE);
    body.classList.add(YELLOW);
  } else if (ScreenWidth <= 500) {
    body.classList.remove(YELLOW, PURPLE);
    body.classList.add(BLUE);
  } else {
    body.classList.remove(BLUE, YELLOW);
    body.classList.add(PURPLE);
  }
  console.log(ScreenWidth);
}

window.addEventListener("resize", handleResize);
