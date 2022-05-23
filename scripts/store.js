const arrStore = [];

class Items {

    isOnStock = false;


    constructor(profilPic, title, price, isOnStock, description, country){
    this.profilPic = profilPic;
    this.title = title;
    this.price = price;
    this.isOnStock = isOnStock;
    this.description = description;
    this.country = country;

    arrStore.push(this);
    }

    onStock(){
        this.isOnStock = true;
    }
};

const item1 = new Items("", "", "", true, "", "");
const item2 = new Items("", "", "", true, "", "");
const item3 = new Items("", "", "", true, "", "");
const item4 = new Items("", "", "", true, "", "");
const item5 = new Items("", "", "", true, "", "");
const item6 = new Items("", "", "", true, "", "");
const item7 = new Items("", "", "", true, "", "");
const item8 = new Items("", "", "", true, "", "");
const item9 = new Items("", "", "", true, "", "");
const item10 = new Items("", "", "", true, "", "");
const item11 = new Items("", "", "", true, "", "");
const item12 = new Items("", "", "", true, "", "");


function myItem(element) {
    const divStore = document.querySelector("#item");
    let store = document.createElement('div');
    store.classList = 'divStore';
    divStore.appendChild(store);
    store.innerHTML =
    `
    <div class="topOfTheCard">
        <img class="picCard" src="${element.profilPic}" alt="">
    </div>
    <div class = "bottom">
        <p>${element.country}</p>
        <h3>${element.title}</h3>
        <p>${element.price}</p>
    
    
    `
};

for (let i=0; i<arrStore.length; i++){
    myItem(arrStore[i]);
};
