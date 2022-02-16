
function createCard() {

    let img = document.createElement("img");
    img.className = "item";
    img.src = "https://previews.123rf.com/images/gow27/gow271202/gow27120200033/12162995-rosa-wc-schild-f%C3%BCr-frauen.jpg";

    let nameSurname = document.createElement("p");
    nameSurname.textContent = "Evelina Toleike";

    let age = document.createElement("p");
    age.textContent = "29";

    let address = document.createElement("p");
    address.textContent = "Vilnius";

    let email = document.createElement("p");
    email.textContent = "ejanusauskaite@gmail.com";


    let newCard = document.createElement("div");
    newCard.className = "item";

    newCard.append(img, nameSurname, age, address, email);
    return newCard;
}

let parent = document.querySelector(".card");
let card = createCard();
parent.append(card);