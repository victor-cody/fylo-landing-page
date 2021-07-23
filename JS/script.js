const RequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
//Back to top functionality

const scrollToTopButton = document.querySelector('.back-to-top'); //scroll button
const header = document.getElementById('header'); // Header
// const navigation = document.getElementById('nav-menu-container');

//function to display the scroll button and make the header stick to the top of the screen
function headerScroll() {
    let Y = document.documentElement.scrollTop || document.body.scrollTop;
    if (Y > 596) {
        header.classList.add('header-scrolled-view')
        scrollToTopButton.classList.add('show-toTop-btn');
        scrollToTopButton.style.display = 'block';
    }
    else {
        header.classList.remove("header-scrolled-view");
        scrollToTopButton.classList.remove("show-toTop-btn");
        scrollToTopButton.style.display = "none";
    }
}
//calling the headerScroll function
window.addEventListener('scroll', headerScroll);
headerScroll()

//our scroll function that will be called when the scroll button is clicked
function scrollToTop() {
  //getting the currentPosition position of the button
  let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  //if the position is greater than 0 then we'll scroll to the top of the page
  if (currentPosition > 0) {
      //scrolling back to the top of the page
      window.scrollTo(0,currentPosition - currentPosition/14.6);
      // Animating our scroll with the javascript RequestAnimationFrame function
        RequestAnimationFrame(scrollToTop);
  }
}

scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToTop();
});