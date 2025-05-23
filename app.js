const bd = document.querySelector("body");
const h1 = document.querySelector("h1");

bd.style.backgroundColor = "black";
h1.style.color = "white";

function handleResize() {
  const size = window.innerWidth;

  if (size >= 1200) {
    bd.style.backgroundColor = "yellow";
  } else if (size < 1200 && size > 900) {
    bd.style.backgroundColor = "purple";
  } else {
    bd.style.backgroundColor = "skyblue";
  }
}

window.addEventListener("resize", handleResize);
