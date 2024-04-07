document.addEventListener('DOMContentLoaded', () => {
    const numericTabs = document.querySelectorAll('.page-change button:not(.left-page, .right-page)');
    const projectsContainers = document.querySelectorAll('.projects-container');

    numericTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            numericTabs.forEach(tab => tab.classList.remove('active'));
            projectsContainers.forEach(container => container.classList.remove('active'));

            tab.classList.add('active');
            projectsContainers[index].classList.add('active');
        });
    });

    const leftArrow = document.querySelector('.left-page');
    const rightArrow = document.querySelector('.right-page');

    leftArrow.addEventListener('click', () => {
        const activeIndex = Array.from(numericTabs).findIndex(tab => tab.classList.contains('active'));
        if(activeIndex > 0) {
            numericTabs[activeIndex - 1].click();
        }
    });

    rightArrow.addEventListener('click', () => {
        const activeIndex = Array.from(numericTabs).findIndex(tab => tab.classList.contains('active'));
        if(activeIndex >= 0 && activeIndex < numericTabs.length - 1) {
            numericTabs[activeIndex + 1].click();
        }
    });
});
