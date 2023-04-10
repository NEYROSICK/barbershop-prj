// Get the button:
let mybutton = document.getElementById('scrollBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - 2
  ) {
    mybutton.style.translate = '0 -60px';
  } else if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.opacity = '100%';
    mybutton.style.visibility = 'visible';
    mybutton.style.translate = '0';
  } else {
    mybutton.style.opacity = '0%';
    mybutton.style.visibility = 'hidden';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
