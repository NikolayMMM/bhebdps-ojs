document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll('.menu__link');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const parentItem = this.closest('.menu__item');
      const subMenu = parentItem.querySelector('.menu_sub');

      if (subMenu) {
        event.preventDefault(); 
        subMenu.classList.toggle('menu_active'); 
      }
    });
  });
});
