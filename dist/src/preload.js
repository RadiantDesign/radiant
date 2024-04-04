window.onload = function() {
    const preloader = document.getElementById('preloader');
    const elementsToHide = document.querySelectorAll('#preloader ~ #top, #preloader ~ nav, #preloader ~ main, #preloader ~ .landingscroll, #preloader ~ .dots, #preloader ~ .backgrounded');

    // Sakrij sve elemente koji dolaze nakon #preloader
    elementsToHide.forEach(element => {
        element.style.display = 'none';
        element.style.opacity = '0'
    });

    // Prikaži preloader
    preloader.style.opacity = '100';

    // Nakon što se preloader učita, prikaži sakrivene elemente
    setTimeout(() => {
        preloader.style.display = 'none';
        elementsToHide.forEach(element => {
            element.style.display = 'block';
            element.style.opacity = '100'
        });
    }, 2500); // Prilagodite ovu vrednost po potrebi za glatkiji prelaz
};
