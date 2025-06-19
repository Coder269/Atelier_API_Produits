let products = [];
let buttons = [];
let chosenProduct = {};



getProducts();

function getProducts() {
    fetch("https://dummyjson.com/products")
        .then(response => {

            if(!response.ok) throw new Error("Erreur" + response.status);
            return response.json()


        })
        .then(data => {
            products = data.products;

            products.forEach(product => createProduct(product));

            buttons.forEach(button => button.addEventListener("click", () => {
                products.forEach(product => {
                    if(product.id === parseInt(button.parentElement.parentElement.id)) {
                        chosenProduct = product;
                        window.location.href = `product.html?id=${chosenProduct.id}`;
                    }
                })

            }))
        })
        .catch(error => console.error("Erreur dans le chargement des produits" + error));
}
function createProduct(product) {
let productsList = document.getElementById("products");
let productFigure = document.createElement("figure");
let productFigureCaption = document.createElement("figcaption");
let productImageDiv = document.createElement("div");
let productImage = document.createElement("img");
let productPrice = document.createElement("p");
let productButtonDiv = document.createElement("div");
let productButton = document.createElement("button");

productFigure.id = product.id.toString();
productFigureCaption.innerHTML = `<h3>${product.title}</h3><h5>${product.brand}</h5>`;
productImage.src = product.thumbnail;
productPrice.innerHTML = `<h5>Prix: ${product.price}$</h5>`;
productButton.innerHTML = "Voir le produit";

productsList.appendChild(productFigure);
productFigure.appendChild(productFigureCaption);
productFigure.appendChild(productImageDiv);
productImageDiv.appendChild(productImage);
productFigure.appendChild(productPrice);
productFigure.appendChild(productButtonDiv);
productButtonDiv.appendChild(productButton);
buttons.push(productButton);
}