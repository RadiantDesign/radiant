function animateCounter(targetElement, endValue, duration) {
    let start = 0;
    const increment = Math.ceil(endValue / (duration / 50));
    const interval = setInterval(() => {
        start += increment;
        if (start >= endValue) {
            clearInterval(interval);
            start = endValue;
        }
        targetElement.textContent = start;
    }, 50);
}

window.addEventListener('load', () => {
    const counters = document.querySelectorAll('.count');
    const endValues = [4, 8, 136, 86, 19, 3]; // End values for each counter
    const durations = [2000, 2000, 2000, 2000, 2000,2000]; // Duration for each counter animation

    counters.forEach((counter, index) => {
        animateCounter(counter, endValues[index], durations[index]);
    });
});


// Function to check if an element's top border is in the viewport
function isInViewportTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight;
}

// Function to handle fade-in animation for counter container
function handleCounterVisibility() {
    const counterContainer = document.querySelector('.counter-container');
    if (isInViewportTop(counterContainer)) {
        counterContainer.classList.add('visible');
    } else {
        counterContainer.classList.remove('visible');
    }
}

// Add scroll event listener to trigger visibility
window.addEventListener('scroll', function() {
    handleCounterVisibility();
});

// Call the function on initial load as well
handleCounterVisibility();
