const title = document.querySelector("div.hello:first-child h1");

const superEventHandler = {
  handleMouseEnter: function () {
    title.style.color = "blue";
    title.innerText = "The mouse is here!";
  },

  handleMouseLeave: function () {
    title.style.color = "green";
    title.innerText = "The mouse is gone!";
  },

  handleRightClick: function () {
    title.style.color = "red";
    title.innerText = "That was a right click!";
  },

  handleWindowResize: function () {
    title.style.color = "purple";
    title.innerText = "You just resize!";
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
window.addEventListener("resize", superEventHandler.handleWindowResize);
