// Lista de produtos (cada produto é um objeto)
const products = [
    { id: 1, name: 'Smartphone', description: 'Celular moderno com 128GB de armazenamento', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Notebook', description: 'Laptop com 16GB de RAM e 512GB SSD', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Televisão', description: 'TV 4K de 55 polegadas', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Fone de Ouvido', description: 'Fones bluetooth com cancelamento de ruído', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Geladeira', description: 'Geladeira 350L com eficiência energética A+', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Ar Condicionado', description: 'Ar condicionado split 9000 BTUs', image: 'https://via.placeholder.com/150' }
];

// Função para exibir os produtos
function displayProducts(filteredProducts) {
    const productCards = document.getElementById("productCards");
    productCards.innerHTML = ''; // Limpa a lista antes de adicionar os novos produtos

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;

        productCards.appendChild(card);
    });
}

// Função de pesquisa
function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    
    // Filtra os produtos com base no nome
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(input)
    );

    // Exibe os produtos filtrados
    displayProducts(filteredProducts);
}

// Exibe todos os produtos inicialmente
displayProducts(products);
