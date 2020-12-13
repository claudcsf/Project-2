/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const navMenu = document.querySelector("#menu");
const topButton = document.getElementById("topButton");

/**
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Helper function to check if an element is in viewport
//if in viewport returns true
function isInViewport(element) {
    const distance = element.getBoundingClientRect();
    return (
        distance.top <= 200 &&
        distance.left >= 0 &&
        distance.bottom >= 90 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth));
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav menu
function navFunction () {
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        let newMenuItem = document.createElement('li');
        const id = section.id;
        const dataNav = section.dataset.nav;
        newMenuItem.innerHTML = `<a class="menu-item ${id}" href="#${id}">${dataNav}</a>`;
        fragment.appendChild(newMenuItem);
    }
    navMenu.appendChild(fragment);
}

navFunction();


//Event listener for scroll into section - uses the isInViewpot function
// Set sections and links as active
document.addEventListener('scroll', function sectionOn(){
    for (const section of sections) {
        const menuItem = document.querySelector(`.${section.id}`);
        if (isInViewport(section)) {
            section.classList.add("active-section");
            menuItem.classList.add("menu-item-active");
        } else {
            section.classList.remove("active-section");
            menuItem.classList.remove("menu-item-active");
        }
    }
}
)


// Scroll to section on link click
const links = document.querySelectorAll(".menu-item");
console.log(links);
for (const link of links) {
    link.addEventListener("click", function clickHandler(a){
        a.preventDefault();
        const href = document.querySelector(link.getAttribute("href"));
        console.log(href);
        href.scrollIntoView({ behavior: "smooth" });
    });
}




//Reveal "scroll to top" button after scrolling down the viewport
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
}

//Event Listener for button click - uses the topFunction to scroll to top
topButton.addEventListener('click', topFunction());
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
/**
 * End Main Functions
 * Begin Events
 * 
*/




// Portfolio carousel

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
  setTimeout(carousel, 5000);
}
