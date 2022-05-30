const arrStore = [];

class Item {

    isOnStock = false;
    isBio = false;


    constructor(profilPic, title, price, isOnStock, description, country, aromaticProfil, ourSelection, coffeeType, isBio, href){
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
    this.href = href;

    arrStore.push(this);
    }

    onStock(){
        this.isOnStock = true;
    }

    bioCoffee(){
        this.isBio = true;
    }
};

const item1 = new Item('/assets/paquets/Sans background & ecriture/Ananas_Mangue-removebg-preview.png', "Ananas & Mangue", " à partir de 18€", true, "café saveur Ananas & Mangue", "Pérou","Fruité & Floral","Producteur","Les cafés de saison","false",);
const item2 = new Item('/assets/paquets/Sans background & ecriture/Caramel_noisette-removebg-preview.png', "Caramel & Noisette", " à partir de 18€", true, "café saveur Caramel & Noisette", "Brésil","Chocolaté & Corsé","Assemblage","Les cafés de saison","true",);
const item3 = new Item('/assets/paquets/Sans background & ecriture/Chocolat_Caramel-removebg-preview.png', "Chocolat & Caramel", " à partir de 18€", true, "café saveur chocolat & Caramel", "Nicaragua","Chocolaté & Corsé","Producteur", "Les classiques","false",);
const item4 = new Item('/assets/paquets/Sans background & ecriture/Chocolat_Noisette-removebg-preview.png', "Chocolat & Noisette", " à partir de 18€", true, "café saveur chocolat & Noisette", "Venezuela","Chocolaté & Corsé","Assemblage","Les cafés de saison","false",);
const item5 = new Item('/assets/paquets/Sans background & ecriture/ChocolatNoir-removebg-preview.png', "Chocolat Noir", " à partir de 18€", true, "café saveur chocolat noir", "Costa Rica","Chocolaté & Corsé","Assemblage", "Les classiques","true",);
const item6 = new Item('/assets/paquets/Sans background & ecriture/ChocolatNoir2-removebg-preview.png', "Chocolat Noir", " à partir de 18€", true, "café saveur chocolat noir", "Colombie","Chocolaté & Corsé","Coopérative", "Les classiques","false",);
const item7 = new Item('/assets/paquets/Sans background & ecriture/FleurDOranger_Limoncello-removebg-preview.png', "Fleur D'Oranger & Limoncello", " à partir de 18€", true, "café saveur fleur d'oranger & limoncello", "Costa Rica","Fruité & Floral","Producteur","Les cafés de saison","false",);
const item8 = new Item('/assets/paquets/Sans background & ecriture/Grenadine_Goyave-removebg-preview.png', "Grenade & Goyave", " à partir de 18€", true, "café saveur Grenade & Goyave", "Colombie","Fruité & Floral","Producteur", "Les éditions limités","false",);
const item9 = new Item('/assets/paquets/Sans background & ecriture/Myrtille_ViolettesDeToulouse-removebg-preview.png', "Myrtille & Violettes", " à partir de 18€", true, "café saveur Myrtille & Violettes", "Pérou","Fruité & Floral","Producteur", "Les éditions limités","false",);
const item10 = new Item('/assets/paquets/Sans background & ecriture/Noisette_Caramel-removebg-preview.png', "Noisette & Caramel", " à partir de 18€", true, "café saveur Noisette & Caramel", "Brésil","Chocolaté & Corsé","Producteur","Les cafés de saison","false",);
const item11 = new Item('/assets/paquets/Sans background & ecriture/NoixDeCoco_Menthe-removebg-preview (1).png', "Noix de Coco & Menthe", " à partir de 18€", true, "café saveur Noix de Coco & Menthe", "Honduras","Fruité & Floral","Producteur", "Les éditions limités","false",);
const item12 = new Item('/assets/paquets/Sans background & ecriture/Peche-removebg-preview (1).png', "Pêche", " à partir de 18€", true, "café saveur Pêche", "Pérou","Fruité & Floral","Producteur", "Les classiques", "false",);


// function myItem(element) {
//     const divStore = document.querySelector("#item");
//     let store = document.createElement('div');
//     store.classList = 'div-store';
//     divStore.appendChild(store);
//     store.innerHTML =
//     `
//     <div class="top-of-the-card">
//         <img class="pic-card" src="${element.profilPic}" alt="${element.description}">
//     </div>
//     <div class = "bottom">
//         <p>${element.country}</p>
//         <h3>${element.title}</h3>
//         <p>${element.price}</p>
    
    
//     `
// };

// for (let i=0; i<arrStore.length; i++){
//     myItem(arrStore[i]);
// };

//todo voir le nombre d'article affiché

let arrlength = arrStore.length;
let showElementsSentence = document.querySelector("#top-div-filter");
showElementsSentence.textContent = `AFFICHER TOUS LES ${arrlength} RÉSULTATS`


const itemContainer = document.querySelector("#item");


//! filtrer par la catégorie selection

const selectBySelection = document.querySelector("#selection-filter");


selectBySelection.addEventListener("change", (e) => {
    const selection = e.target.value;
    const newSelectArr = arrStore.filter(item => item.ourSelection === selection);
    itemContainer.innerHTML = ``;
    myItem(newSelectArr);
    arrlength = newSelectArr.length;
    if(selection === "none") {
        myItem(arrStore);
    }

    let showElementsSentence = document.querySelector("#top-div-filter");
    showElementsSentence.textContent = `AFFICHER TOUS LES ${arrlength} RÉSULTATS`
    

});

//& filtrer par profil aromatique

const selectByAromaticProfil = document.querySelector("#aromatic-filter")

selectByAromaticProfil.addEventListener("change", (e) => {
    const aromaticSelection = e.target.value;
    const newAromaticArr = arrStore.filter (item => item.aromaticProfil === aromaticSelection);
    itemContainer.innerHTML = ``;
    myItem(newAromaticArr);
    arrlength = newAromaticArr.length;
    if(aromaticSelection === "none") {
        myItem(arrStore);
    }

    let showElementsSentence = document.querySelector("#top-div-filter");
    showElementsSentence.textContent = `AFFICHER TOUS LES ${arrlength} RÉSULTATS`
    
});

//= filtrer par bio

const selectIfBio = document.querySelector("#bio-filter")

selectIfBio.addEventListener("change", (e) => {
    const bioSelection = e.target.value;
    const newBioArr = arrStore.filter (item => item.isBio === bioSelection);
    itemContainer.innerHTML = ``;
    myItem(newBioArr);
    arrlength = newBioArr.length;
    if(bioSelection === "none") {
        myItem(arrStore);
    }

    let showElementsSentence = document.querySelector("#top-div-filter");
    showElementsSentence.textContent = `AFFICHER TOUS LES ${arrlength} RÉSULTATS`
    
});


//? filtrer par tag

const selectTag = document.querySelector("#tag-filter")

selectTag.addEventListener("change", (e) => {
   const tagSelection = e.target.value;
   const newTagArr = arrStore.filter (item => item.isBio === tagSelection);
   const newTagArr2 = arrStore.filter (item => item.aromaticProfil === tagSelection);

   itemContainer.innerHTML = ``;
   myItem(newTagArr);
   myItem(newTagArr2);
   if (tagSelection ==="none"){
       myItem(arrStore)
   }
   arrlength = Number(newTagArr.length)+Number(newTagArr2.length);


   let showElementsSentence = document.querySelector("#top-div-filter");
   showElementsSentence.textContent = `AFFICHER TOUS LES ${arrlength} RÉSULTATS`
   
});


//& filtrer par café

const selectCoffee = document.querySelector("#coffee-tag")

selectCoffee.addEventListener("change", (e) => {
    const coffeeSelection = e.target.value;
    const newCoffeeArr = arrStore.filter (item => item.title === coffeeSelection);

    itemContainer.innerHTML = ``;
    myItem(newCoffeeArr);
    arrlength = newCoffeeArr.length;
    if (coffeeSelection ==="none"){
        myItem(arrStore)
    }

    let showElementsSentence = document.querySelector("#top-div-filter");
    showElementsSentence.textContent = `AFFICHER TOUS LES ${arrlength} RÉSULTATS`
    
 
})

// //= filtrer par catégorie en cliquant sur la ligne

function filterObjects(coffeeTypeOnClick) {
    const coffeeTypeSelection = coffeeTypeOnClick;
    const coffeeTypeSelectionArr = arrStore.filter(item => item.coffeeType === coffeeTypeSelection);

    if(coffeeTypeOnClick === "all"){
        itemContainer.innerHTML = ``;

        myItem(arrStore);
        arrlength = arrStore.length;
    }
    if (coffeeTypeOnClick === "Les classiques"){
        itemContainer.innerHTML = ``;

        myItem(coffeeTypeSelectionArr);
        arrlength = coffeeTypeSelectionArr.length;
    }
    if(coffeeTypeOnClick === "Les cafés de saison"){
        itemContainer.innerHTML = ``;

        myItem(coffeeTypeSelectionArr);
        arrlength = coffeeTypeSelectionArr.length;
    }
    if (coffeeTypeOnClick === "Les éditions limités"){
        itemContainer.innerHTML = ``;

        myItem(coffeeTypeSelectionArr);
        arrlength = coffeeTypeSelectionArr.length;
    };

    let showElementsSentence = document.querySelector("#top-div-filter");
    showElementsSentence.textContent = `AFFICHER TOUS LES ${arrlength} RÉSULTATS`

}
// const selectByClicking = document.querySelector("#coffee-filter")

// selectByClicking.addEventListener("click", (e)=>{
//     const typeOfCoffee = e.target.value
//     let newCoffeeArrByType;
//     switch (typeOfCoffee) {
//         case "Les classiques":
//             newCoffeeArrByType = arrStore.filter (item => item.coffeeType === typeOfCoffee)
//             break;

//         case "Les cafés de saison":
//             newCoffeeArrByType = arrStore.filter (item => item.coffeeType === typeOfCoffee)
//             break;

//         case "Les éditions limités":
//             newCoffeeArrByType = arrStore.filter (item => item.coffeeType === typeOfCoffee)
//             break;

//         case "Cafés":
//             myItem(arrStore)
//             break;
       
//         default:
//             break;
//     }
// })








//todo Tableau qui sera push() pour chaque changement

function myItem(arr) {
    arr.forEach(item => {
        itemContainer.innerHTML +=
        `
        <div class = "div-store">
            <div class="top-of-the-card">
            <img class="pic-card" src="${item.profilPic}" alt="${item.description}">
            </div>
            <div class = "bottom">
            <p class="country">${item.country}</p>
            <h3>${item.title}</h3>
            <p>${item.price}</p>
        </div>

        `
    });
}
myItem(arrStore);

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



