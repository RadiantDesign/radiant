(function() {
    const buttons = document.querySelectorAll('.btn');
    const storeImages = document.querySelectorAll('.store-item');

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const filter = e.target.dataset.filter;

            storeImages.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = "block";
                } else if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
})();


// The syntax (function() { /* code */ })() is an immediately invoked function expression (IIFE). Let's break it down:

// (function() { /* code */ }): This creates an anonymous function. The function definition is wrapped in parentheses ( ). This is done to treat the function as an expression rather than a declaration. It's a common practice to prevent conflicts with other code.

// (): Following the function expression, you see an extra set of parentheses (). This set of parentheses immediately invokes (calls) the function that was just defined. This execution is immediate due to the trailing parentheses.

// Together, this pattern allows you to define a function and immediately execute it. It's useful for creating a private scope and executing code without polluting the global namespace.


/////////////////////////////////////////////////////////////
/// WHAT IF I WANT TO SORT BOXES FOR EXAMPLE ??? ///////////
///////////////////////////////////////////////////////////
/*
User:
Can you tell me if I can sort div elements as well? Say I want to create showcase boxes for my work, each with a specific category like CSS, JavaScript, or Animations. If I have buttons like 'CSS,' 'JavaScript,' etc., can I click 'JavaScript' to only display boxes related to JavaScript?

ChatGPT:
Absolutely! You can use similar logic to filter and sort div elements containing specific data attributes or classes.

HTML Structure: Ensure each box/div element that you want to sort or filter has a class or a data attribute that distinguishes it based on the category (e.g., CSS, JavaScript, Animations, etc.).
Button Click Event: Attach click event listeners to the buttons representing different categories (e.g., CSS, JavaScript). When a button is clicked, use JavaScript to hide or show the div elements based on their category.
Here's an example:

HTML:
<div class="box" id="all-boxes">
    <div class="work-box" data-category="javascript">
        <!-- Content for JavaScript work -->
    </div>
    <div class="work-box" data-category="css">
        <!-- Content for CSS work -->
    </div>
    <!-- ... other work boxes ... -->
</div>

<button class="filter-btn" data-filter="javascript">JavaScript</button>
<button class="filter-btn" data-filter="css">CSS</button>
<!-- ... other filter buttons ... -->

JavaScript:
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;
        const workBoxes = document.querySelectorAll('.work-box');

        workBoxes.forEach(box => {
            const category = box.dataset.category;
            if (filter === 'all') {
                box.style.display = 'block';
            } else if (category !== filter) {
                box.style.display = 'none';
            } else {
                box.style.display = 'block';
            }
        });
    });
});
This JavaScript code adds click event listeners to each button. When clicked, it checks the data-filter attribute of the clicked button and compares it to the data-category attribute of each work box. Based on the comparison, it toggles the display of the boxes.

Remember to adjust the class names and attributes in the HTML and JavaScript code to match your specific structure and needs.
*/
