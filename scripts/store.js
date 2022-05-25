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

const item1 = new Items('/assets/paquets/Ananas&Mangue.png', "Ananas & Mangue", " à partir de 18€", true, "café saveur Ananas & Mangue", "Pérou");
const item2 = new Items('/assets/paquets/Caramel&noisette.png', "Caramel & Noisette", " à partir de 18€", true, "café saveur Caramel & Noisette", "Brésil");
const item3 = new Items('/assets/paquets/Chocolat&Caramel.png', "Chocolat & Caramel", " à partir de 18€", true, "café saveur chocolat & Caramel", "Nicaragua");
const item4 = new Items('/assets/paquets/Chocolat&Noisette.png', "Chocolat & Noisette", " à partir de 18€", true, "café saveur chocolat & Noisette", "Venezuela");
const item5 = new Items('/assets/paquets/ChocolatNoir.png', "Chocolat Noir", " à partir de 18€", true, "café saveur chocolat noir", "Costa Rica");
const item6 = new Items('/assets/paquets/ChocolatNoir2.png', "Chocolat Noir", " à partir de 18€", true, "café saveur chocolat noir", "Colombie");
const item7 = new Items('/assets/paquets/FleurDOranger&Limoncello.png', "Fleur D'Oranger & Limoncello", " à partir de 18€", true, "café saveur fleur d'oranger & limoncello", "Costa Rica");
const item8 = new Items('/assets/paquets/Grenadine&Goyave.png', "Grenade & Goyave", " à partir de 18€", true, "café saveur Grenade & Goyave", "Colombie");
const item9 = new Items('/assets/paquets/Myrtille&ViolettesDeToulouse.png', "Myrtille & Violettes", " à partir de 18€", true, "café saveur Myrtille & Violettes", "Pérou");
const item10 = new Items('/assets/paquets/Noisette&Caramel.png', "Noisette & Caramel", " à partir de 18€", true, "café saveur Noisette & Caramel", "Brésil");
const item11 = new Items('/assets/paquets/NoixDeCoco&Menthe.png', "Noix de Coco & Menthe", " à partir de 18€", true, "café saveur Noix de Coco & Menthe", "Honduras");
const item12 = new Items('/assets/paquets/Peche.png', "Pêche", " à partir de 18€", true, "café saveur Pêche", "Pérou");


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
