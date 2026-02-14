'use strict';

const menuCards = [];

function hover(element, enter, leave){
  element.addEventListener('mouseenter', enter)
  element.addEventListener('mouseleave', leave)
}

function openBuy(){
    const buy = document.querySelector(".buy");
    const order = buy.querySelector(".order");
    order.style.display = "grid";
    const form3 = buy.querySelectorAll("form")[1];
    console.log(form3);
    
    form3.style.display = "none";
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


newCardInArray(new Card("Fusilli makaronai su vištiena ir daržovių salotomis",
                        "menu_img4.jpg", 
                        "Vištienos ir makaronų spiralės su žaliuoju pesto padažu. Patiekiama su šviežių daržovių salotomis iš pomidorų, agurkų ir ridikėlių.",
                        "10.49"));
newCardInArray(new Card("Avižiniai dribsniai su uogomis ir žemės riešutų sviestu",
                        "menu_img1.jpg", 
                        "Avižiniai dribsniai su mėlynėmis, avietėmis, gervuogėmis ir bananu. Aplieti žemės riešutų sviestu. Sveiki ir sotūs pusryčiai.",
                        "4.99"));
newCardInArray(new Card("Grikių dubenėlis su avokadu, kiaušiniu ir sūriu",
                        "menu_img5.jpg", 
                        "Sveiki ir sotūs pusryčiai: purūs grikiai, šviežias agurkas, prinokęs avokadas, virtas kiaušinis ir pjaustytas sūris.",
                        "7.99"));

newCardInArray(new Card("Vištienos vinegretas su rugine duona",
                        "menu_img6.jpg", 
                        "Klasikinis burokėlių, bulvių, morkų ir žirnelių vinegretas. Patiekiamas su virta vištiena ir ruginės duonos riekelėmis.",
                        "8.99"));
                        

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
price.textContent = "Kaina: 0.00" + "€";

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
    price.textContent = "Kaina: " + newPrice + "€";
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
