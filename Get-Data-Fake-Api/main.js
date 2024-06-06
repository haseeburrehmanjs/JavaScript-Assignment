const card = document.querySelector('.cardsection')

let apiData;
function renderProduct(){
    axios('https://fakestoreapi.com/products')
    .then(response => {
        // console.log(response.data);
        apiData = response.data.map((item, index) => {
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
            return item
        })
        // console.log(renderData);
    })
    .catch(error => {
        console.log(error);
    })
}
renderProduct()


function filteredItem(btn){
    card.innerHTML = ''
    let data = apiData.filter(item => item.category === btn.innerHTML)
    data.map((item, index) => {
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
    // console.log(data);/
}

function allItems(){
    renderProduct()
    card.innerHTML = ''
}




























// function filtrdBtn(btn){
//     axios('https://fakestoreapi.com/products')
//     .then(responce => {
//         card.innerHTML = ''
//         console.log(btn.innerHTML)
//         let filterdItem = responce.data.filter(item => item.category === btn.textContent)
//         console.log(filterdItem)
//         filterdItem.map((item,index) => {
//             card.innerHTML += `
//             <div class="card p-2" style="width: 18rem; ">
//             <img width='300' height='300' src="${item.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">Category : ${item.category}</h5>
//             <h5 class="card-title">Rating : ${item.rating.rate} Count : ${item.rating.count}</h5>
//             <p class="card-text">Price : $${item.price}</p>
//             <a id='addBtn' class="btn btn-primary" onclick='addToCard(${index})'>Add To Card</a>
//             </div>
//             </div>`
//         })
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }

// function allItems(){
//     card.innerHTML = ''
//     axios('https://fakestoreapi.com/products')
//     .then(responce => {
//         console.log(responce.data);
//         responce.data.map((item,index) => {
//             card.innerHTML += `
//             <div class="card p-2" style="width: 18rem; ">
//             <img width='300' height='300' src="${item.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">Category : ${item.category}</h5>
//             <h5 class="card-title">Rating : ${item.rating.rate} Count : ${item.rating.count}</h5>
//             <p class="card-text">Price : $${item.price}</p>
//             <a id='addBtn' class="btn btn-primary" onclick='addToCard(${index})'>Add To Card</a>
//             </div>
//             </div>`
//         })
//     })
//     .catch(error => {
//         console.log(error);
//     })

// }


