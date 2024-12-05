
// Função que será chamada quando o usuário digitar algo na barra de pesquisa
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        
        // Verifica se o nome do produto contém o texto da pesquisa
        if (productName.includes(input)) {
            product.classList.add('visible');  // Exibe o produto
        } else {
            product.classList.remove('visible');  // Oculta o produto
        }
    });
}
