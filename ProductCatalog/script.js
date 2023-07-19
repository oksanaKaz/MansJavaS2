async function fetchProductCatalog() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        // Kādi dati ir jāpadot metodē?
        displayProductCatalog();
    } catch (error) {
        console.error('Error fetching product catalog:', error);
    }
}

function displayProductCatalog(products) {
    // Kā iegūt pareizo DOM elementu, kurā ievietot produktu katalogu?
    productCatalogContainer.innerHTML = '';

    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-md-6', 'mb-4');
        div.innerHTML = `
        <div class="card h-100">
          <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" width="320" height="250">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Stock: ${product.stock}</p>
            <p class="card-text">
                ${product.rating} ${generateStars(product.rating)}
            </p>
          </div>
        </div>
      `;
        productCatalogContainer.appendChild(div);
    });
}

function generateStars(rating) {
    // Cik zvaignes vajag kopā?
    // Kā var aprēķināt, kad vajag pilnu zvaigzni, bet kad tukšu?
}

fetchProductCatalog();
