
/*const order = document.getElementById("Order");
order.addEventListener('click', sendProductJSON);

function sendProductJSON() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'product.json');
    xhr.onload = function() {
        const json = JSON.parse(xhr.response);
        renderJSON(json);
    };
    xhr.send();
}


function renderJSON(json) {
    document.getElementById('itemInfo').innerHTML =
       <h2 id = "name" class = "text-info">${json.name}</h2>
       <img id = "img">${json.link}</img>
    ;
}

function itemSector() {
    // Retrieve product information from URL parameters
    const urlParams = new URLSearchParams(window.location.href);
    const productName = urlParams.get('productName');
    const productPrice = urlParams.get('productPrice');
    const productImage = urlParams.get('productImage');

    // Populate the form fields with product information
    document.getElementById('product').innerHTML = `
        <img src="${decodeURIComponent(productImage)}" alt="${productName}" /><br>
        <label>Product Name:</label> ${productName}<br>
        <label>Price:</label> ${productPrice}<br>
    `;
}*/