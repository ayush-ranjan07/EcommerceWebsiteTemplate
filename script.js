// Sample product data (replace with your own data)
const products = [
    { name: 'Product 1', price: 19.99 },
    { name: 'Product 2', price: 29.99 },
    { name: 'Product 3', price: 9.99 },
    // Add more products here
];

// Function to display products
function displayProducts() {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;

        productsSection.appendChild(productCard);
    });
}

// Display products on page load
window.onload = function () {
    displayProducts();
};


// Get modal elements
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

// Get close buttons
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

// Get login and register buttons
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');

// Open the login modal
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Open the registration modal
registerButton.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

// Close the login modal when the close button is clicked
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close the registration modal when the close button is clicked
closeRegister.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

// Close the modals if the user clicks outside the modal
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Handle login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password (add your own validation logic here)

    // After successful validation, you can redirect the user or perform other actions
    alert(`Welcome, ${username}!`);
    loginModal.style.display = 'none';
});

// Handle registration form submission
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Perform user registration (add your own registration logic here)

    // After successful registration, you can redirect the user or perform other actions
    alert(`Registration successful for ${newUsername}!`);
    registerModal.style.display = 'none';
});
