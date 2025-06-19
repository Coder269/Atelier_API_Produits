let products = [];
let choosenProduct = {};
let productH2 = document.querySelector("h2");
let productImage = document.querySelector("img");
let productDescription = document.querySelector("p");

getProducts()
function getProducts() {
    fetch("https://dummyjson.com/products")
        .then(response => {

            if(!response.ok) throw new Error("Erreur" + response.status);
            return response.json()


        })
        .then(data => {
            products = data.products;
                const params = new URLSearchParams(window.location.search);
                const productId = params.get('id');

            products.forEach(product => {
                if (product.id == productId) {
                    choosenProduct = product;
                    productH2.innerHTML = choosenProduct.title;
                    productImage.src = `${choosenProduct.images[0]}`;
                    productDescription.innerHTML = choosenProduct.description;
                }


            });

        })
        .catch(error => console.error("Erreur dans le chargement des produits" + error));
}