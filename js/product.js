let products = [];
let chosenProduct = {};
let productH2 = document.querySelector("h2");
let productH4 = document.querySelector("h4");
let productImage = document.querySelector("img");
let productDescription = document.querySelector("p");
let shippingInformationH5 = document.querySelector("h5");
let productPrice = document.getElementById("price");

viewSingleProduct()
function viewSingleProduct() {
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
                    chosenProduct = product;
                    productH2.innerHTML = chosenProduct.title;
                    productH4.innerHTML = chosenProduct.brand;
                    productImage.src = `${chosenProduct.images[0]}`;
                    productDescription.textContent = chosenProduct.description;
                    productPrice.innerHTML = `Prix: ${chosenProduct.price}$`;
                    shippingInformationH5.textContent  = chosenProduct.shippingInformation;
                }
            });

        })
        .catch(error => console.error("Erreur dans le chargement des produits" + error));
}