'use strict';

const menuCards = [];

function hover(element, enter, leave){
  element.addEventListener('mouseenter', enter)
  element.addEventListener('mouseleave', leave)
}

function createMenuCard(name, imgSrc, description, price){

    let newDiv = document.createElement("div");
    newDiv.classList.add("menuCard");

    let newImg = document.createElement("img");
    newImg.setAttribute("src", "../img/" + imgSrc);

    newDiv.appendChild(newImg);

    let newDiv2 = document.createElement("div");
    newDiv.appendChild(newDiv2);

    let newNameHeader = document.createElement("h3");
    newNameHeader.textContent = name;

    newDiv2.appendChild(newNameHeader);

    let newParagraphDescription = document.createElement("p");
    newParagraphDescription.textContent = description;

    newDiv2.appendChild(newParagraphDescription);

    let newParagraphPrice = document.createElement("p");
    newParagraphPrice.textContent = price + "€";

    newDiv2.appendChild(newParagraphPrice);

    let newButton = document.createElement("button");
    newButton.setAttribute("type", "button");
    newButton.textContent = "Padaryti užsakymą";

    function onMouseEnter(){
        newButton.textContent = "Užsakyk dabar!";
    }

    function onMouseLeave(){
        newButton.textContent = "Padaryti užsakymą";
    }

    hover(newButton, onMouseEnter, onMouseLeave);

    newDiv2.appendChild(newButton);

    document.querySelector(".cardBox").appendChild(newDiv);
}

class Card{
    constructor(name, imgSrc, description, price){
        this.name = name;
        this.imgSrc = imgSrc;
        this.description = description;
        this.price = price;
    }
}

function newCardInArray(card){
    if(menuCards.length==0){
        menuCards[0] = card;
    }
    else{
        menuCards[menuCards.length] = card;
    }
}

newCardInArray(new Card("Blynai su uogomis",
                        "menu_img1.jpg", 
                        "Švelnūs blynai iš viso grūdo miltų su šviežiomis aviečių uogomis. Tikras naturalus skonis.",
                        "91.99"));

newCardInArray(new Card("Šviežios salotos",
                        "menu_img2.jpg", 
                        "Salotų lapai, daržovės ir naminis užpilas. Sveika ir skanu.",
                        "149.99"));

newCardInArray(new Card("Vaisių kokteilis",
                        "menu_img3.jpg", 
                        "Sultingi vaisiai, uogos ir truputis medaus – energija visai dienai.",
                        "75.99"));
menuCards.forEach(element => {
    createMenuCard(element.name, element.imgSrc, element.description, element.price);
});


