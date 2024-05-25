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
        ProductName: 'Teddy Bear',
        price: 95,
        Image: src = "./images/p5.png"
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
        ProductName: 'Ring',
        price: 200,
        Image: src = "./images/p8.png"
    },
]


let card = document.querySelector('#card-box');

function render(){
    for(let i = 0; i < products.length; i++){
        card.innerHTML +=  `
        <div class="card-box p-3" onclick="addToCard(${i})">
            <div class="newTag d-flex justify-content-center align-items-center"><h6>New</h6></div>
            <div class="mt-2 d-flex justify-content-center">
            <img src="${products[i].Image}">
            </div>
            <div class="price-card d-flex justify-content-between mt-5">
            <h5>${products[i].ProductName}</h5>
            <h5>Price: <span class="price">$${products[i].price}</span></h5>
            </div>
        </div>
        `
    }
}
render()

let addItems;
let items = JSON.parse(localStorage.getItem('sendData'));
if (items === null) {
    addItems = [];
} else {
    addItems = items;
}

let cardArry = []

function addToCard(i){
    // console.log('additems');
    if(cardArry.includes(products[i])){
        products[i].quantity += 1
        console.log(cardArry);
    }else {
        products[i].quantity = 1
        cardArry.push(products[i])
        console.log(cardArry);
    }
}

function checkOut(){
    localStorage.setItem('sendData', JSON.stringify(cardArry))
    window.location = 'cart.html'
}
