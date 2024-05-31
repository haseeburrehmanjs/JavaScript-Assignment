let getItems = JSON.parse(localStorage.getItem('sendData'))
console.log(getItems);

let cardSection = document.querySelector('#cardsection')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')

function render() {
    if (getItems != null && getItems.length > 0) {
        for (let i = 0; i < getItems.length; i++) {
            cardSection.innerHTML += `
                <div class="card" style="width: 18rem;">
                <div class="text-center mt-3">
                <img class="card-img-top" src="${getItems[i].Image}" alt="Card image cap">
                </div>
                <div class="card-body">
                <h5 class="card-title">PRODUCT NAME : ${getItems[i].ProductName}</h5>
                <p class="card-text">PRICE $${getItems[i].price}</p>
                <div class='d-flex justify-content-between'>
                <p class="btn btn-danger" onclick='deleteCard(${i})'>Delete</p>
                <p id='quantity'><span class='btn btn-danger' onclick='lessQuantity(${i})'>-</span> ${getItems[i].quantity} <span class='btn btn-danger' onclick='addQuantity(${i})'>+</span></p>
                </div>
                </div>
                </div>`
        }
    } else {
        console.log('Cart items Emty ha malik');
        h2.innerHTML = 'Items Not Found...'
    }
}
render()

function deleteCard(i) {
    getItems.splice(i, 1)
    localStorage.setItem('sendData', JSON.stringify(getItems))
    location.reload()
}

function addQuantity(i) {
    cardSection.innerHTML = ''
    getItems[i].quantity += 1
    render()
    totalAmount()
}

function lessQuantity(i) {
    if(getItems[i].quantity <= 1){
        deleteCard(i)
        totalAmount()
    }else{
        cardSection.innerHTML = ''
        getItems[i].quantity -= 1
        render() 
        totalAmount()
    }
}

let totalPrice;
function totalAmount(){
    for(let i = 0; i < getItems.length; i++){
        totalPrice = (getItems[i].quantity * getItems[i].price)
    }
    h3.innerHTML = `
    Total Amount : ${totalPrice}
    `
}
totalAmount()






