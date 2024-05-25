let cardsection = document.querySelector('.cardsection')
let h2 = document.querySelector('h2') 

let GetLocalData = JSON.parse(localStorage.getItem('sendData'))
console.log(GetLocalData);

function checkOutSection(){
    if(GetLocalData != null && GetLocalData.length > 0){
        for(let i = 0; i < GetLocalData.length; i++){
            cardsection.innerHTML +=  `
            <div class="card-box2 p-3">
                <div class="newTag d-flex justify-content-center align-items-center"><h6>New</h6></div>
                <div class="mt-2 d-flex justify-content-center">
                <img src="${GetLocalData[i].Image}">
                </div>
                <div class="price-card d-flex justify-content-between mt-5">
                <h5>${GetLocalData[i].ProductName}</h5>
                <h5>Price: <span class="price">$${GetLocalData[i].price}</span></h5>
                </div>
                <h5>Quantity : ${GetLocalData[i].quantity}</h5>
            </div>
            `
        }
    }else {
        console.log('CART EMPTY HA MALIK');
        h2.innerHTML = 'Cart not found...'
    }
}
checkOutSection()