
const order = document.getElementById("Order");
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