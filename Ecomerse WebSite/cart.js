let getItems = JSON.parse(localStorage.getItem('sendData'))
// console.log(getItems);

let cardSection = document.querySelector('#cardsection')
let h2 = document.querySelector('h2')

function rednerItems() {
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
            <p class="btn btn-danger" onclick='removeBtn(${i})'>Delete</p>
            <p id='quantity'><span class='btn btn-danger' onclick='lessBtn(${i})'>-</span> ${getItems[i].quantity} <span class='btn btn-danger' onclick='addQuantity(${i})'>+</span></p>
            </div>
            </div>
            </div>`
        }
    } else {
        h2.innerHTML = 'No Items Found.....'
    }
}
rednerItems()

function removeBtn(i) {
    getItems.splice(i, 1)
    localStorage.setItem('sendData', JSON.stringify(getItems))
    location.reload()
}

function lessBtn(i) {
    if(getItems[i].quantity > 0){
        getItems[i].quantity -= 1
        localStorage.setItem('sendData', JSON.stringify(getItems))
        location.reload()
    }else {
        removeBtn(i)
    }
}











