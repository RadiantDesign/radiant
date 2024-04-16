document.addEventListener('DOMContentLoaded', function() {

    const proceedButton = document.querySelector('.proceed');
    const initialRequestDiv = document.querySelector('.initial-requestdiv');
    const requestOverlay = document.querySelector('.request-overlay');
    const prevButton = document.getElementById('prev-option');
    const nextButton = document.getElementById('next-option');
    const secondOverlay = document.querySelector('.second-overlay');
    const prevButton2 = document.getElementById('prev-option2');
    const nextButton2 = document.getElementById('next-option2');
    const thirdOverlay = document.querySelector('.third-overlay')
    const prevButton3 = document.getElementById('prev-option3');
    const nextButton3 = document.getElementById('next-option3');
    const fourthOverlay = document.querySelector('.fourth-overlay');
    const prevButton4 = document.getElementById('prev-option4');
    const nextButton4 = document.getElementById('next-option4');
    const fifthOverlay = document.querySelector('.fifth-overlay');
    const prevButton5 = document.getElementById('prev-option5');
    
    proceedButton.addEventListener('click', function() {
        initialRequestDiv.style.display = 'none';
        requestOverlay.style.display = 'unset';
    });

    prevButton.addEventListener('click', function() {
        requestOverlay.style.display = 'none';
        initialRequestDiv.style.display = 'unset';
    });

    nextButton.addEventListener('click', function() {
        requestOverlay.style.display = 'none';
        secondOverlay.style.display = 'unset';
    });

    prevButton2.addEventListener('click', function() {
        secondOverlay.style.display = 'none';
        requestOverlay.style.display = 'unset';
    });

    nextButton2.addEventListener('click', function() {
        secondOverlay.style.display = 'none';
        thirdOverlay.style.display = 'unset';
    });

    prevButton3.addEventListener('click', function() {
        thirdOverlay.style.display = 'none';
        secondOverlay.style.display = 'unset';
    });

    nextButton3.addEventListener('click', function() {
        thirdOverlay.style.display = 'none';
        fourthOverlay.style.display = 'unset';
    });

    prevButton4.addEventListener('click', function() {
        fourthOverlay.style.display = 'none';
        thirdOverlay.style.display = 'unset';
    });

    nextButton4.addEventListener('click', function() {
        fourthOverlay.style.display = 'none';
        fifthOverlay.style.display = 'unset';
    });

    prevButton5.addEventListener('click', function() {
        fifthOverlay.style.display = 'none';
        fourthOverlay.style.display = 'unset';
    });




});
