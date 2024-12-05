
// Função para pesquisar produtos
function searchProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        let productName = product.getAttribute('data-name').toLowerCase();
        
        // Verifica se o nome do produto contém o texto da pesquisa
        if (productName.includes(input)) {
            product.style.display = 'block'; // Exibe o produto
        } else {
            product.style.display = 'none'; // Oculta o produto
        }
    });
}
