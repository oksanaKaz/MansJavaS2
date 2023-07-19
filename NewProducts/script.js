const form = document.getElementById('add-product-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const ratingInput = document.getElementById('rating');

    const productData = {
        id: generateProductId(),
        title: titleInput.value,
        description: descriptionInput.value,
        price: parseFloat(priceInput.value),
        rating: parseFloat(ratingInput.value)
    };

    addProduct(productData);
}

function generateProductId() {
    // Generate a random ID for the product
    return Math.floor(Math.random() * 1000) + 1;
}

async function addProduct(productData) {
    await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    }).then(response => {
            if (!response.ok) {
                showStatusMessage('Error adding product', 'danger');
            }
            console.log(response);
        })
        .then(() => {
            showStatusMessage('Product added successfully', 'success');
            clearForm();
        })
        .catch(error => {
            console.error('Error adding product:', error);
            showStatusMessage('Error adding product', 'danger');
        });
}

function showStatusMessage(message, type) {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = `
    <div class="alert alert-${type}" role="alert">
      ${message}
    </div>
  `;
    setTimeout(() => {
        statusDiv.innerHTML = '';
    }, 6000);
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('rating').value = '';
}
