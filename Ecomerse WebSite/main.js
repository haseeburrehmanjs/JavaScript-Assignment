let products = [
    {
        ProductName: 'Ring',
        price: 200,
        Image: src = "./images/p1.png"
    },
    {
        ProductName: 'Watch',
        price: 300,
        Image: src = "./images/p7.png"
    },
    {
        ProductName: 'Teddy Bear',
        price: 110,
        Image: src = "./images/p3.png"
    },
    {
        ProductName: 'Flower Bouquet',
        price: 45,
        Image: src = "./images/p4.png"
    },
    {
        ProductName: 'ladies watch',
        price: 95,
        Image: src = "./images/watch-1.png"
    },
    {
        ProductName: 'Flower Bouquet',
        price: 70,
        Image: src = "./images/p6.png"
    },
    {
        ProductName: 'Watch',
        price: 400,
        Image: src = "./images/p7.png"
    },
    {
        ProductName: 'Ring',
        price: 200,
        Image: src = "./images/p8.png"
    },
    {
        ProductName: 'Watch',
        price: 99,
        Image: src = "./images/watch.png"
    },
    {
        ProductName: 'wall clock',
        price: 400,
        Image: src = "./images/wallclock.png"
    },
]


let card = document.querySelector('#card-box');

let addItems;
let items = JSON.parse(localStorage.getItem('sendData'));
if (items === null) {
    addItems = [];
} else {
    addItems = items;
}

for(let i = 0; i < products.length; i++){
    // console.log(products[i]);
    card.innerHTML += 
    `<div class="card-box p-3" onclick="addToCard(${i})">
        <div class="newTag d-flex justify-content-center align-items-center"><h6>New</h6></div>
        <div class="mt-2 d-flex justify-content-center">
        <img src="${products[i].Image}">
        </div>
        <div class="price-card d-flex justify-content-between mt-5">
        <h5>${products[i].ProductName}</h5>
        <h5>Price: <span class="price">$${products[i].price}</span></h5>
        </div>
    </div>`
}


function addToCard(i){
    if(addItems.includes(products[i])){
        products[i].quantity += 1
        console.log(addItems);
    }else {
        products[i].quantity = 1
        addItems.push(products[i])
        console.log(addItems);
    }
}

function checkOut(){
    localStorage.setItem('sendData', JSON.stringify(addItems))
    window.location = 'cart.html'
}
    








