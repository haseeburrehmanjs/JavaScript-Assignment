let mobilePhones = [
    {
        name: "iPhone 14 Pro Max",
        price: 1299.00,
        description: "The iPhone 14 Pro Max features a larger Super Retina XDR display, an enhanced camera system with improved low-light performance, and the latest A16 Bionic chip.",
        model: "A2730"
    },
    {
        name: "Samsung Galaxy Z Fold 4",
        price: 1799.99,
        description: "The Galaxy Z Fold 4 unfolds into a large immersive display, offering multitasking capabilities and a versatile camera system.",
        model: "SM-F926"
    },
    {
        name: "Google Pixel 7 Pro",
        price: 999.00,
        description: "The Pixel 7 Pro boasts an even better camera system, faster performance, and longer battery life, making it a top choice for photography enthusiasts.",
        model: "GK7P"
    },
    {
        name: "OnePlus 10 Pro",
        price: 1199.00,
        description: "The OnePlus 10 Pro introduces a refined design, a high-refresh-rate display, and advanced camera features powered by Hasselblad.",
        model: "LE2210"
    },
    {
        name: "Xiaomi Mi Mix 5",
        price: 899.00,
        description: "The Xiaomi Mi Mix 5 offers a unique ceramic design, a borderless display, and flagship-level performance at an affordable price.",
        model: "M2111K6G"
    },
    {
        name: "Sony Xperia 5 III",
        price: 1099.00,
        description: "The Sony Xperia 5 III combines a compact design with powerful camera capabilities and enhanced gaming features.",
        model: "XQBC72"
    },
    {
        name: "Huawei P50 Pro",
        price: 1299.00,
        description: "The Huawei P50 Pro features a revolutionary camera system co-engineered with Leica, delivering unparalleled photography and videography experiences.",
        model: "ANA-AN00"
    },
    {
        name: "LG Velvet 3",
        price: 899.00,
        description: "The LG Velvet 3 offers a sleek design, a versatile camera setup, and 5G connectivity for seamless multimedia experiences.",
        model: "LM-G900"
    },
    {
        name: "Motorola Edge 30 Pro",
        price: 999.00,
        description: "The Motorola Edge 30 Pro boasts a high-refresh-rate display, a powerful Snapdragon processor, and a triple-camera system for capturing stunning photos.",
        model: "XT2203"
    },
    {
        name: "ASUS ROG Phone 6",
        price: 1299.00,
        description: "The ASUS ROG Phone 6 is designed for gaming enthusiasts, featuring a high-refresh-rate display, customizable RGB lighting, and a dedicated gaming mode.",
        model: "ZS673KS"
    },
    {
        name: "Nokia X20",
        price: 499.00,
        description: "The Nokia X20 offers a clean Android experience, robust build quality, and long-lasting battery life at an affordable price point.",
        model: "TA-1342"
    },
    {
        name: "BlackBerry Key3",
        price: 799.00,
        description: "The BlackBerry Key3 combines a physical keyboard with modern smartphone features, catering to users who prioritize productivity and security.",
        model: "BBB100-1"
    },
    {
        name: "Oppo Find X5 Pro",
        price: 1199.00,
        description: "The Oppo Find X5 Pro features a sleek design, a versatile camera system co-engineered with Hasselblad, and fast charging technology.",
        model: "CPH2301"
    },
    {
        name: "Realme GT 2 Pro",
        price: 799.00,
        description: "The Realme GT 2 Pro offers flagship-level performance, a high-refresh-rate display, and a versatile camera setup at an attractive price point.",
        model: "RMX3301"
    },
    {
        name: "Vivo X80 Pro",
        price: 1099.00,
        description: "The Vivo X80 Pro features a stunning AMOLED display, a powerful MediaTek processor, and a versatile camera setup for capturing beautiful moments.",
        model: "V2190A"
    },
    {
        name: "Lenovo Legion Phone 3",
        price: 999.00,
        description: "The Lenovo Legion Phone 3 is designed for mobile gamers, boasting a high-refresh-rate display, shoulder triggers, and a powerful cooling system.",
        model: "L70081"
    },
    {
        name: "ZTE Axon 40 Pro",
        price: 899.00,
        description: "The ZTE Axon 40 Pro offers a sleek design, a vibrant AMOLED display, and a powerful Snapdragon processor for smooth performance.",
        model: "Z999D"
    },
    {
        name: "Alcatel 5X",
        price: 349.00,
        description: "The Alcatel 5X packs impressive features into an affordable package, including a large display, dual-camera setup, and all-day battery life.",
        model: "5085A"
    },
    {
        name: "TCL 30 Pro",
        price: 599.00,
        description: "The TCL 30 Pro offers a stylish design, a vibrant AMOLED display, and a capable camera system for capturing memorable moments.",
        model: "T795H"
    },
    {
        name: "Infinix Zero X Pro",
        price: 499.00,
        description: "The Infinix Zero X Pro features a high-refresh-rate display, a versatile camera setup with periscope lens, and fast charging technology.",
        model: "X802"
    }
];


let card = document.querySelector('#card-section')

for (let i = 0; i < mobilePhones.length; i++) {
    // console.log(mobilePhones[i]);
    card.innerHTML += `
    <div>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${mobilePhones[i].name}</h5>
    <h5 class="card-subtitle mb-2 text-muted">Price : ${mobilePhones[i].price}</h5>
    <p class="card-text">${mobilePhones[i].description}</p>
    <button onclick='addToCard(${i})' class="btn btn-warning">Add to Card</button>
    </div>
    </div>
    </div>
    `
}

let addCard = []

function addToCard(index){
    // console.log(mobilePhones[index]);
    if(addCard.includes(mobilePhones[index])){
        mobilePhones[index].Quantity += 1;
        console.log(addCard);
    }else {
        mobilePhones[index].Quantity = 1;
        addCard.push(mobilePhones[index])
        console.log(addCard);
    }

}