
// Galleri
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}


// Burger menu
    // Select elements
    const menuButton = document.getElementById('menu-toggle'); // her laver vi en variable til vores knap som refere til classen menuButton
    const menuPanel = document.getElementById('menu-panel'); // her gør vi det samme bare til vores menuPanel som lige nu ikke indeholder noget

    // Toggle the menu visibility
    menuButton.addEventListener('click', () => {  // her tilføjer vi et onClick event menuButton
      menuPanel.classList.toggle('active'); // denne linje leder efter alle classes der heder "active" og gør det synlig
    });

let burgerMenu = { // Her laver vi et objekt
  menuItems: ["Hjem", "Butikker", "Tjenester", "Kundeservice", "Kontakt"] // her laver vi en variable som indeholder et array til vores objekt
}
if (burgerMenu.menuItems.length > 0) { // her laver vi en if statment som checker om vores objekt er større ind 0
  for (i = 0; i < burgerMenu.menuItems.length; i++) { // for loop

    const node = document.createElement("a"); // her laver en node hvor vi laver et reference element
    
    const textnode = document.createTextNode(burgerMenu.menuItems[i]); // her laver vi en ny variable som indeholder tekst som er det samme som hvad der er i arrayed
    
    node.appendChild(textnode); // Den tager vores "a" variable og tilføjer den tekst som står i arrayed
    
    menuPanel.appendChild(node); // har refere vi til html for at vise hvor vi vil have vores tekst hende derfor tilføjer vores child node til menu-panel
  }
}
