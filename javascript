


// script.js
function searchProducts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach((item) => {
        const productName = item.textContent.toLowerCase();
        if (productName.includes(filter)) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
}
