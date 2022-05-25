const arrStore = [];

class Item {

    isOnStock = false;
    isBio = false;


    constructor(profilPic, title, price, isOnStock, description, country, aromaticProfil, ourSelection, coffeeType, isBio){
    this.profilPic = profilPic;
    this.title = title;
    this.price = price;
    this.isOnStock = isOnStock;
    this.description = description;
    this.country = country;
    this.aromaticProfil = aromaticProfil;
    this.ourSelection = ourSelection;
    this.coffeeType = coffeeType;
    this.isBio = isBio;

    arrStore.push(this);
    }

    onStock(){
        this.isOnStock = true;
    }

    bioCoffee(){
        this.isBio = true;
    }
};

const item1 = new Item('/assets/paquets/Ananas&Mangue.png', "Ananas & Mangue", " à partir de 18€", true, "café saveur Ananas & Mangue", "Pérou","Fruité & Floral","Producteur","Les cafés de saison",false);
const item2 = new Item('/assets/paquets/Caramel&noisette.png', "Caramel & Noisette", " à partir de 18€", true, "café saveur Caramel & Noisette", "Brésil","Chocolaté & Corsé","Assemblage","Les cafés de saison",true);
const item3 = new Item('/assets/paquets/Chocolat&Caramel.png', "Chocolat & Caramel", " à partir de 18€", true, "café saveur chocolat & Caramel", "Nicaragua","Chocolaté & Corsé","Producteur", "Les classiques",false);
const item4 = new Item('/assets/paquets/Chocolat&Noisette.png', "Chocolat & Noisette", " à partir de 18€", true, "café saveur chocolat & Noisette", "Venezuela","Chocolaté & Corsé","Assemblage","Les cafés de saison",false);
const item5 = new Item('/assets/paquets/ChocolatNoir.png', "Chocolat Noir", " à partir de 18€", true, "café saveur chocolat noir", "Costa Rica","Chocolaté & Corsé","Assemblage", "Les classiques",true);
const item6 = new Item('/assets/paquets/ChocolatNoir2.png', "Chocolat Noir", " à partir de 18€", true, "café saveur chocolat noir", "Colombie","Chocolaté & Corsé","Coopérative", "Les classiques",false);
const item7 = new Item('/assets/paquets/FleurDOranger&Limoncello.png', "Fleur D'Oranger & Limoncello", " à partir de 18€", true, "café saveur fleur d'oranger & limoncello", "Costa Rica","Fruité & Floral","Producteur","Les cafés de saison",false);
const item8 = new Item('/assets/paquets/Grenadine&Goyave.png', "Grenade & Goyave", " à partir de 18€", true, "café saveur Grenade & Goyave", "Colombie","Fruité & Floral","Producteur", "Les éditions limités",false);
const item9 = new Item('/assets/paquets/Myrtille&ViolettesDeToulouse.png', "Myrtille & Violettes", " à partir de 18€", true, "café saveur Myrtille & Violettes", "Pérou","Fruité & Floral","Producteur", "Les éditions limités",false);
const item10 = new Item('/assets/paquets/Noisette&Caramel.png', "Noisette & Caramel", " à partir de 18€", true, "café saveur Noisette & Caramel", "Brésil","Chocolaté & Corsé","Producteur","Producteur","Les cafés de saison",false);
const item11 = new Item('/assets/paquets/NoixDeCoco&Menthe.png', "Noix de Coco & Menthe", " à partir de 18€", true, "café saveur Noix de Coco & Menthe", "Honduras","Fruité & Floral","Producteur", "Les éditions limités",false);
const item12 = new Item('/assets/paquets/Peche.png', "Pêche", " à partir de 18€", true, "café saveur Pêche", "Pérou","Fruité & Floral","Producteur", "Les classiques");


function myItem(element) {
    const divStore = document.querySelector("#item");
    let store = document.createElement('div');
    store.classList = 'div-store';
    divStore.appendChild(store);
    store.innerHTML =
    `
    <div class="top-of-the-card">
        <img class="pic-card" src="${element.profilPic}" alt="${element.description}">
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

// const newArrStore = arrStore.filter(item => item.coffeeType === "Les cafés de saison")
// const newArrStore = arrStore.filter(item => item.coffeeType === "Les éditions limités")
// const newArrStore = arrStore.filter(item => item.coffeeType === "Les classiques")

// const newArrStore = arrStore.filter(item => item.ourSelection === "Producteur");
// const selectionCooperative = arrStore.filter(item => item.ourSelection === "Coopérative");
// const selectionAssemblage = arrStore.filter(item => item.ourSelection === "Assemblage");

// const chocolateAromatic = arrStore.filter(item => item.aromaticProfil === "Chocolaté & Corsé");
// const fruitAromatic = arrStore.filter(item => item.aromaticProfil === "Fruité & Floral");

// const isBio = arrStore.filter(item => item.isBio === true);
// const isNotBio = arrStore.filter(item => item.isBio === false);

// function applyFilters(){
//     const newArrStore  = arrStore.filter(item => item.coffeeType === )
// }








//! help

// const user1 = {
//     gender: "male",
//     isLegal: false
// };
// const user2 = {
//     gender: "female",
//     isLegal: true
// };


// const arr = [user1, user2];
// const fileteredArr = arr.filter(user => user.gender === "female");
// console.log(fileteredArr);

//! help