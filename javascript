


// Exemplo de lista de produtos em um arquivo JSON ou como um array de objetos
const products = [
    { id: 1, name: "Produto 1", description: "Descrição do Produto 1" },
    { id: 2, name: "Produto 2", description: "Descrição do Produto 2" },
    { id: 3, name: "Produto 3", description: "Descrição do Produto 3" },
    { id: 4, name: "Produto 4", description: "Descrição do Produto 4" },
    { id: 5, name: "Produto 5", description: "Descrição do Produto 5" }
];

// Função para exibir a lista de produtos
function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Limpar a lista existente

    filteredProducts.forEach(product => {
        const li = document.createElement("li");
        li.className = "product-item";
        li.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
        productList.appendChild(li);
    });
}

// Função de busca
function searchProducts() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    });

    displayProducts(filteredProducts);
}

// Carregar os produtos na página inicialmente
window.onload = () => {
    displayProducts(products);
};
