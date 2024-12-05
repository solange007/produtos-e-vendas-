// Lista simulada de produtos
const products = [
    { name: "Camiseta Estampada", description: "Camiseta de algodão com estampa divertida" },
    { name: "Tênis de Corrida", description: "Tênis leve e confortável para corrida" },
    { name: "Calça Jeans", description: "Calça jeans de corte reto, ideal para o dia a dia" },
    { name: "Boné de Baseball", description: "Boné ajustável com bordado na frente" },
    { name: "Jaqueta de Couro", description: "Jaqueta de couro com detalhes modernos" },
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Limpar lista antes de exibir novos resultados

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product-item");
            productElement.innerHTML = `<strong>${product.name}</strong><p>${product.description}</p>`;
            productList.appendChild(productElement);
        });
    } else {
        productList.innerHTML = "<p>Nenhum produto encontrado.</p>";
    }
}

function searchProducts() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput) || 
        product.description.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Exibir todos os produtos inicialmente
displayProducts(products);

