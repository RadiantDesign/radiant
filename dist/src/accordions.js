const bttns = document.querySelectorAll("button[data-content]");

for (let btn of bttns) {
    btn.addEventListener("click", (e) => {
        const button = e.target.closest("button[data-content]");
        const sectionId = button.getAttribute("data-content");
        const el = document.querySelector(sectionId);

        const activeSections = document.querySelectorAll(".content.active");
        activeSections.forEach((section) => {
            if (section.id !== sectionId.substring(1)) {
                section.classList.remove('active');
            }
        });

        el.classList.toggle("active");
    });
}