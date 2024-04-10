const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const productItems = document.querySelectorAll(".product");

    productItems.forEach(item => {
        const productName = item.querySelector("h2").textContent.toUpperCase();

        if (productName.includes(searchbox)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
