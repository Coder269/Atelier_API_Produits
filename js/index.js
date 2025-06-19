let index = [];
let buttons = [];
let choosenProduct = {};



getProducts();

function getProducts() {
    fetch("https://dummyjson.com/products")
        .then(response => {

            if(!response.ok) throw new Error("Erreur" + response.status);
            return response.json()


        })
        .then(data => {
            index = data.products;

            index.forEach(product => createProduct(product));

            buttons.forEach(button => button.addEventListener("click", () => {
                index.forEach(product => {
                    if(product.id === parseInt(button.parentElement.parentElement.id)) {
                        choosenProduct = product;
                        window.location.href = `product.html?id=${choosenProduct.id}`;
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
let productImage = document.createElement("img");
let productPrice = document.createElement("p");
let productButtonDiv = document.createElement("div");
let productButton = document.createElement("button");

productFigure.id = product.id.toString();
productFigureCaption.innerHTML = `<h3>${product.title}</h3>`;
productImage.src = product.thumbnail;
productPrice.innerHTML = `<h4>Prix: ${product.price}$</h4>`;
productButtonDiv.classList.add("button-div");
productButton.innerHTML = "Voir le produit";

productsList.appendChild(productFigure);
productFigure.appendChild(productFigureCaption);
productFigure.appendChild(productImage);
productFigure.appendChild(productPrice);
productFigure.appendChild(productButtonDiv);
productButtonDiv.appendChild(productButton);
buttons.push(productButton);
}