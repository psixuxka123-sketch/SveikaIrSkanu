'use strict';

const menuCards = [];

function hover(element, enter, leave){
  element.addEventListener('mouseenter', enter)
  element.addEventListener('mouseleave', leave)
}

function openBuy(){
    const buy = document.querySelector(".buy");
    buy.style.display = "flex";
}
function closeBuy(){
    const buy = document.querySelector(".buy");
    buy.style.display = "none";
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

    newButton.addEventListener("click", openBuy);

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
                        "3.49"));

newCardInArray(new Card("Šviežios salotos",
                        "menu_img2.jpg", 
                        "Salotų lapai, daržovės ir naminis užpilas. Sveika ir skanu.",
                        "4.99"));

newCardInArray(new Card("Vaisių kokteilis",
                        "menu_img3.jpg", 
                        "Sultingi vaisiai, uogos ir truputis medaus – energija visai dienai.",
                        "5.29"));
const form = document.querySelector(".buy").querySelectorAll("form")[1];
const form2 = document.querySelector(".order");

menuCards.forEach(element => {
    createMenuCard(element.name, element.imgSrc, element.description, element.price);




    const newText = document.createElement("label");
    newText.setAttribute("for", "input")
    newText.textContent = element.name;

    const newInput = document.createElement("input");
    newInput.setAttribute("type", "number");
    newInput.setAttribute("min", "0");
    newInput.setAttribute("value", "0");

    form2.appendChild(newText);
    form2.appendChild(newInput);   
});

const price = document.createElement("p");
price.textContent = "0.00" + "€";

const submitButton = document.createElement("button");
submitButton.addEventListener('click', ()=>{
    form2.style.display = "none";
    form.style.display = "block";
})
submitButton.textContent = "Išsaugoti";
submitButton.setAttribute("type", "button");
form2.appendChild(submitButton);

form2.appendChild(price);

function updatePrice(newPrice){
    price.textContent = newPrice + "€";
}

form2.addEventListener("change", (e)=>{
    const inputs = form2.querySelectorAll("input");
    let newPrice = 0;

    inputs.forEach(el => {
        const label = el.previousElementSibling;
        menuCards.forEach(item => {
            if(item.name == label.textContent){
                newPrice += item.price * el.value;
            }
        })
    })
    updatePrice(newPrice.toFixed(2));
})


form.addEventListener("change", (e)=>{
    e.preventDefault();
    let value = document.querySelector('input[name="pay"]:checked').value;
    
    if(value == "Kortele"){
        document.querySelector(".cardInfo").style.display = "block";
    }
    else{
        document.querySelector(".cardInfo").style.display = "none";
    }
});
