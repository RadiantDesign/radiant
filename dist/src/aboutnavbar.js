const primaryNav = document.getElementById("nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

const visibility = primaryNav.getAttribute("data-visible");

if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true); 
} else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false)
}

});





// Select the image by its class
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

// Add a click event listener to the image
mobileNavToggle.addEventListener('click', function() {
    // Check the current state and toggle the image accordingly
    if (this.getAttribute('aria-expanded') === 'false') {
        this.setAttribute('src', '../imgs/close.svg'); // Path to the new image
        this.setAttribute('aria-expanded', 'true');
    } else {
        this.setAttribute('src', '../imgs/hamburger.svg'); // Back to the original image
        this.setAttribute('aria-expanded', 'false');
    }
});
