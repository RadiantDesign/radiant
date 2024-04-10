document.addEventListener("DOMContentLoaded", function() {
    // Pretpostavljamo da su ID-jevi dugmadi 'en' i 'sr'
    const currentUrl = window.location.href;

    // Proveravamo da li se u URL-u nalazi 'index.html' ili 'indexrs.html'
    if (currentUrl.includes('index.html') && !currentUrl.includes('indexrs.html')) {
        document.getElementById('en').classList.add('active');
    } else if (currentUrl.includes('indexrs.html')) {
        document.getElementById('sr').classList.add('active');
    }
});

