
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
    const menuButton = document.getElementById('menu-toggle');
    const menuPanel = document.getElementById('menu-panel');

    // Toggle the menu visibility
    menuButton.addEventListener('click', () => {
      menuPanel.classList.toggle('active');
    });

let burgerMenu = {
  menuItems: ["Hjem", "Butikker", "Tjenester", "Kundeservice", "Kontakt"]
}
if (burgerMenu.menuItems.length > 0) {
  for (i = 0; i < burgerMenu.menuItems.length; i++) {

    const node = document.createElement("a");
    
    const textnode = document.createTextNode(burgerMenu.menuItems[i]);
    
    node.appendChild(textnode);
    
    document.getElementById('menu-panel').appendChild(node);
  }
}

