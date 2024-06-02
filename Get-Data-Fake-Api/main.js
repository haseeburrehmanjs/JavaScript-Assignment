const card = document.querySelector('.cardsection')

axios('https://fakestoreapi.com/products')
    .then(responce => {
        console.log(responce.data);
        responce.data.map((item,index) => {
            card.innerHTML += `
            <div class="card p-2" style="width: 18rem; ">
            <img width='300' height='300' src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Category : ${item.category}</h5>
            <h5 class="card-title">Rating : ${item.rating.rate} Count : ${item.rating.count}</h5>
            <p class="card-text">Price : $${item.price}</p>
            <a id='addBtn' class="btn btn-primary" onclick='addToCard(${index})'>Add To Card</a>
            </div>
            </div>`
        })
    })
    .catch(error => {
        console.log(error);
    })


function filtrdBtn(btn){
    axios('https://fakestoreapi.com/products')
    .then(responce => {
        card.innerHTML = ''
        console.log(btn.innerHTML)
        let filterdItem = responce.data.filter(item => item.category === btn.textContent)
        console.log(filterdItem)
        filterdItem.map(item => {
            card.innerHTML += `
            <div class="card p-2" style="width: 18rem; ">
            <img width='300' height='300' src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Category : ${item.category}</h5>
            <h5 class="card-title">Rating : ${item.rating.rate} Count : ${item.rating.count}</h5>
            <p class="card-text">Price : $${item.price}</p>
            <a id='addBtn' class="btn btn-primary">Add To Card</a>
            </div>
            </div>`
        })
    })
    .catch(error => {
        console.log(error);
    })
}   

function allItems(){
    card.innerHTML = ''
    axios('https://fakestoreapi.com/products')
    .then(responce => {
        console.log(responce.data);
        responce.data.map((item) => {
            card.innerHTML += `
            <div class="card p-2" style="width: 18rem; ">
            <img width='300' height='300' src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Category : ${item.category}</h5>
            <h5 class="card-title">Rating : ${item.rating.rate} Count : ${item.rating.count}</h5>
            <p class="card-text">Price : $${item.price}</p>
            <a id='addBtn' class="btn btn-primary" onclick='addToCard()'>Add To Card</a>
            </div>
            </div>`
        })
    })
    .catch(error => {
        console.log(error);
    })

}



function addToCard(index){
    console.log(index);
}