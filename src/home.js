export function createHero(){
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const heroText = document.createElement("div");
  const heroimg = document.createElement("div");
  hero.append(heroText,heroimg);
    
}