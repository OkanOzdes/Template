// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
var menu = document.getElementById("myMenu");
var logo = document.getElementById("myLogo");
var sponsor = document.getElementById("mySponsor");
var headerContent = document.getElementById("hContent");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      menu.classList.add("sticky-menu");
      logo.classList.add("sticky-logo");
      sponsor.classList.add("sticky-sponsor"); 
      headerContent.classList.add("sticky-content");
  } else {
      header.classList.remove("sticky");
      menu.classList.remove("sticky-menu");  
      logo.classList.remove("sticky-logo");
      sponsor.classList.remove("sticky-sponsor"); 
      headerContent.classList.add("sticky-content");
  }
}

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
    element.classList.remove(stringClass);else

    element.classList.add(stringClass);
  };

  init();
})();