document.addEventListener("DOMContentLoaded", function() {
    // Pretpostavljamo da su ID-jevi dugmadi 'en' i 'sr'
    const currentUrl = window.location.href;

    // Proveravamo da li se u URL-u nalazi 'index.html' ili 'indexrs.html'
    if (currentUrl.includes('about.html') && !currentUrl.includes('aboutrs.html')) {
        document.getElementById('en').classList.add('active');
    } else if (currentUrl.includes('aboutrs.html')) {
        document.getElementById('sr').classList.add('active');
    }
});

