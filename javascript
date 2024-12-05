
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase(); // Obtém o valor da pesquisa
    let products = document.getElementById("productList").getElementsByTagName("li"); // Obtém a lista de produtos

    // Loop para verificar cada item da lista
    for (let i = 0; i < products.length; i++) {
        let productName = products[i].textContent || products[i].innerText;

        // Se o nome do produto contiver o texto da pesquisa, exibe o item, caso contrário, oculta
        if (productName.toLowerCase().indexOf(input) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}




