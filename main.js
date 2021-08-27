/*mobile menu button behavior, and hide or show mobile menu */ 
function myFunction() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("menu-btn").innerHTML = "+"
  } else {
    x.style.display = "block";
    document.getElementById("menu-btn").innerHTML = "_"
  }

}document.getElementById("menu-btn").addEventListener("click", myFunction);

/* ScrollReveal for smooth transitions */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: false
})
const srproj = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 2000,
  reset: false
})

/* ScrollReveal media queries needed for mobile version */
function srMediaQuery(f) {
  if (f.matches) { // If media query matches
    sr.reveal('.name-wrap', {delay: 200})
    sr.reveal('.jasmine-image', {distance: '0px'})
    srproj.reveal('.latest-grid', {delay:200})

  } else {

    /* home section*/
    sr.reveal('.name-wrap', {delay: 100})
    sr.reveal('.jasmine-image', {origin:'left', delay:200})

    /*about information*/
    sr.reveal('.text-wrap', {delay:200})

    /*contact section*/
    sr.reveal('.contact-grid', {delay:200})

    /*projects page*/
    srproj.reveal('.latest-grid', {delay:200, interval: 200})
    srproj.reveal('.projects-grid', {delay:200})
  }
}

var f = window.matchMedia("(max-width: 715px)")
srMediaQuery(f) // Call listener function at run time
f.addListener(srMediaQuery) // Attach listener function on state changes