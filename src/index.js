import "../src/styles.css"
import { createMenu } from "./menu.js";
import homebackground from "./images/homebackground.png"
const body = document.querySelector("body");
body.style.backgroundImage = `url(${homebackground})`
const mainContent = document.querySelector("#content");
let currentlyIn = "home";
const navigation = document.querySelector(".navigation");
let currentDom = navigation.children[0];
const navigationBar = {
  home : document.querySelector(".home"),
  menu : document.querySelector(".menu"),
  about : document.querySelector(".about"),
  "book-table" : document.querySelector(".book-table")
};
navigation.addEventListener("click",(click)=>{
  let clickedItem = click.target.classList[0]; 
  if(clickedItem === "home" || clickedItem === "menu" || clickedItem === "about"){
    navigationBar[currentlyIn].classList.remove("selected");
    navigationBar[clickedItem].classList.add("selected");
    currentlyIn = clickedItem;

  }
  if(clickedItem === "menu"){
    const menu = createMenu();
    menu.children[1].addEventListener("mouseover",(mouseover)=>{
      if(mouseover.target.classList.contains("overlay")){
        const img = mouseover.target.previousElementSibling.children[0].src;
        body.style.backgroundImage = `url(${img})`;
        body.style.backgroundPosition = "center";
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
      }
    })
    mainContent.innerHTML = ""; // clear previous content
    mainContent.append(menu);
    console.dir(menu)
  }
  if(clickedItem === "home"){
    body.style.backgroundImage = `url(${homebackground})`
    mainContent.innerHTML="";
  }
  if(clickedItem === "about"){
    mainContent.innerHTML="";
  }
  if(clickedItem === "book-table"){
    mainContent.innerHTML="";
  }
})