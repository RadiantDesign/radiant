window.onload = function() {
    const preloader = document.getElementById('preloader');
    const elementsToHide = document.querySelectorAll('#top, nav, main, .landingscroll, .dots, .backgrounded');

    // Prikaži preloader
    preloader.style.opacity = '100';

    // Nakon završetka vremena, sakrij preloader i prikaži sakrivene elemente
    setTimeout(() => {
        preloader.style.display = 'none';
        elementsToHide.forEach(element => {
            element.style.display = 'block';
            element.style.opacity = '100';
        });
    }, 2500); // Prilagodite ovu vrednost po potrebi za glatkiji prelaz
};
