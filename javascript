// script.js
const searchBar = document.getElementById('searchBar');
const productList = document.getElementById('productList');

searchBar.addEventListener('input', function () {
    const query = searchBar.value.toLowerCase();
    const items = productList.getElementsByTagName('li');
    
    for (let item of items) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
    }
});




