document.getElementById('worktogether').addEventListener('click', function() {
    document.querySelector('.contact-overlay').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.contact-overlay').style.opacity = '1';
        document.querySelector('.contact-overlay').style.visibility = 'visible';
    }, 10); // delay to allow CSS transition
});

document.getElementById('closeOverlay').addEventListener('click', function() {
    document.querySelector('.contact-overlay').style.opacity = '0';
    document.querySelector('.contact-overlay').style.visibility = 'hidden';
    setTimeout(() => {
        document.querySelector('.contact-overlay').style.display = 'none';
    }, 300); // match the CSS transition time
});