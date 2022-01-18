function homeMenu() {
    let menuLinks = document.querySelectorAll('.menu__link');
    let menuSub;
    menuLinks = Array.from(menuLinks);
    
    for (let i = 0; i < menuLinks.length; i++) {
     menuLinks[i].onclick = function() {
      if (menuLinks[i].nextElementSibling) {
       menuSub = menuLinks[i].nextElementSibling;
    
       if (menuSub.className.includes('menu_active')) {
        menuSub.classList.toggle('menu_active');
        return false;
       } else {
          menuSub = menuLinks[i].nextElementSibling;
    
          menuSub.classList.toggle('menu_active');
          return false;
       }
      }
     }
    }
   }
  
  homeMenu();
  