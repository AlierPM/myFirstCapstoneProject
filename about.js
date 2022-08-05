const slideNavMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const linkAction = document.querySelectorAll('.nav-link');
const myButton = document.getElementById('myBtn');

hamburger.addEventListener('click', () => {
  slideNavMenu.classList.toggle('slide');
  hamburger.classList.toggle('slide');
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
topFunction();

linkAction.forEach((n) => {
  n.addEventListener('click', () => {
    linkAction.forEach((n) => n.classList.remove('active'));
    n.classList.add('active');
    slideNavMenu.classList.remove('slide');
    hamburger.classList.remove('slide');
  });
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', () => {
  scrollFunction();
});