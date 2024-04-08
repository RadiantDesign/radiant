document.addEventListener('DOMContentLoaded', () => {
    const tabAccordions = document.querySelectorAll('.tab-accordion');
    const faqContainers = document.querySelectorAll('.faq-accordions');

    tabAccordions.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove the 'active' class from all tabs and containers
            tabAccordions.forEach(tab => tab.classList.remove('active'));
            faqContainers.forEach(container => container.classList.remove('active'));

            // Add the 'active' class to the clicked tab and the corresponding container
            tab.classList.add('active');
            if (faqContainers[index]) {
                faqContainers[index].classList.add('active');
            }
        });
    });
});
