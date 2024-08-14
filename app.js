const products = [
    {
        "id": 1,
        "name": "Javascript for Dummies",
        "price": 25,
        "description": "Book about Javascript developent for absolute beginners.",
        "quantity": 20,
        "image": "product-1.jpg"
    },
    {
        "id": 2,
        "name": "iPhone 15 Pro Max",
        "price": 1250,
        "description": "Newest iPhone",
        "quantity": 20,
        "image": "product-2.jpg"
    },
    {
        "id": 3,
        "name": "Watch",
        "price": 170,
        "description": "Tool to track time",
        "quantity": 20,
        "image": "product-3.jpg"
    },
    {
        "id": 4,
        "name": "Camera",
        "price": 790,
        "description": "Photo Camera",
        "quantity": 20,
        "image": "product-4.jpg"
    },
    {
        "id": 5,
        "name": "Hairdryer",
        "price": 99,
        "description": "Blows hot air to dry your hair",
        "quantity": 20,
        "image": "product-5.jpg"
    },
    {
        "id": 6,
        "name": "187 Vinyl",
        "price": 40,
        "description": "Best German Rap Artists Vinyl",
        "quantity": 20,
        "image": "product-6.jpg"
    }
];

const productsContainer = document.querySelector(".products");
function populateProducts() {
    let html = "";

    products.forEach(product => {
        html += `
        <div class="product">
            <div class="product-image" style="background-image: url('/img/${product.image}');"></div>
            <div class="flex-group">
                <h3>${product.name}</h3>
                <h3 class="price">${product.price}.00 $</h3>
            </div>
            <p>${product.description}</p>
            <button class="remove" data-id="${product.id}">Remove From Cart</button>
        </div>
        `;
    });

    productsContainer.innerHTML = html;

    addListeners();
}

const cartContainer = document.querySelector(".cart-items");
function populateCart() {
    let html = "";

    products.forEach(product => {
        html += `<li>${product.name} <span>Quantity: <span id="qty" data-id="${product.id}">${product.quantity}</span></span></li>`;
    });

    cartContainer.innerHTML = html;
}

function addListeners() {
    document.querySelectorAll(".product").forEach((product) => {
        product.querySelector(".remove").addEventListener("click", (event) => {
            const id = event.target.dataset.id;
    
            products.forEach(product => {
                if (product.id == id) {
                    product.quantity--;
                }
    
                if(product.quantity <= 0) {
                    products.splice(products.indexOf(product), 1);
                }
            });
            populateCart();
            populateProducts();
        });
    });
}

populateProducts();
populateCart();

document.querySelector(".checkout").addEventListener("click", () => {
    let content = "You ordered:\n";
    products.forEach(product => {
        content += `${product.name} - Quantity: ${product.quantity}\n`;
    });
    alert(content);
});