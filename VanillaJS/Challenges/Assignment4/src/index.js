import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");
const html = document.querySelector("html");

const superEventHandler = {
  handleTitleEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  handleTitleleave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handleResize: function () {
    title.innerText = "You juse resized!";
    title.style.color = colors[2];
  },
  handleRightClick: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  }
};

title.addEventListener("mouseenter", superEventHandler.handleTitleEnter);
title.addEventListener("mouseleave", superEventHandler.handleTitleleave);
window.addEventListener("resize", superEventHandler.handleResize);
html.addEventListener("contextmenu", superEventHandler.handleRightClick);
