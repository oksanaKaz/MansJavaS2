async function fetchProductCatalog() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        displayProductCatalog(data.products);
    } catch (error) {
        console.error('Error fetching product catalog:', error);
    }
}

function displayProductCatalog(products) {
    // Kā iegūt pareizo DOM elementu, kurā ievietot produktu katalogu?
    const productCatalogContainer = document.getElementById('product-catalog');
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
    let stars = "";
    const fullStar = `<span class="star">&#9733;</span>`;
    const emptyStar = `<span class="star empty">&#9734;</span>`;
    const fullCount = Math.round(rating);
    for (let i = 1; i <= 5; i++) {
        if (fullCount >= i) {
            stars += fullStar;
        } else {stars += emptyStar;}
    }
    return stars;
}

const el = document.getElementById("product-catalog");
el.addEventListener("click", function (e) {       //e apzīmē event
    console.log(e);
    console.log(e.target);
    console.log("it was a click");
    e.target.style.color = "yellow";
})

fetchProductCatalog();
