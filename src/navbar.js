export function createNavbar(){
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar-theme");
  const appetizers = document.createElement("button");
  appetizers.textContent = "Appetizers";
  appetizers.setAttribute('data-id','0');
  const signatureDishes = document.createElement("button");
  signatureDishes.textContent = "Signature Dishes";
  signatureDishes.setAttribute('data-id','1');
  const sweetEndings = document.createElement("button");
  sweetEndings.textContent = "Sweet Endings";
  sweetEndings.setAttribute('data-id','2')
  const beverages = document.createElement("button");
  beverages.textContent = "Beverages";
  beverages.setAttribute('data-id','3');
  const highlight = document.createElement("span");
  highlight.classList.add("highlight");
  navbar.classList.add("menu-navbar");
  navbar.append(appetizers,signatureDishes,sweetEndings,beverages,highlight);
  return navbar;
}