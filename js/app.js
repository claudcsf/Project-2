let myIndex = 0;
carousel();

function carousel() {
  let i;
  let slideshow = document.getElementsByClassName("slide");
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slideshow.length) {myIndex = 1}    
  slideshow[myIndex-1].style.display = "block";  
  setTimeout(carousel, 30000);
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}