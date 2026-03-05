import { createNavbar } from "./navbar.js";
import { getMenuItems } from "./menuItems.js";
import { createMenuCard } from "./menuCard.js";
export function createMenu(){
  let menuCount = 0;
  let currently = null;
  const navbar = createNavbar();
  const highlight = navbar.querySelector(".highlight")
  currently = navbar.children[0];
  currently.classList.add("selected")
  const menu = document.createElement("div");
  menu.classList.add("menu-content");
  menu.append(navbar);
  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");
  menu.append(menuItems);
  const menuItemsList = getMenuItems();
  const foodCategory = menuItemsList.find(item=>item.category === currently.textContent);
  if(foodCategory !== undefined){
    menuItems.innerHTML="";
    foodCategory.items.forEach((item)=>{
      let menuCard = createMenuCard(item);
      menuCount++
      menuItems.append(menuCard);
    })
    menuCount = 0;
  }
  menu.addEventListener("click",(click)=>{
    const dataId = click.target?.dataset?.id;
    if(dataId !== undefined){
      const numericId = Number(dataId);
      highlight.style.left = `${numericId*11}rem`;
      currently.classList.remove("selected");
      currently = click.target;
      currently.classList.add("selected");
      const foodCategory = menuItemsList.find(item=>item.category === click.target.textContent);
      if(foodCategory !== undefined){
        menuItems.innerHTML="";
        foodCategory.items.forEach((item)=>{
          let menuCard = createMenuCard(item);
          menuCount++
          menuItems.append(menuCard);
        })
        menuCount = 0;
      }
    }
  })
  return menu;
}