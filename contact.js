fetch("https://jsonplaceholder.typicode.com/todos/1").then(response =>{
if(response.ok){
    return response.json();
} else{
    throw new Error("interner konekcija nije u redu");
}
});

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".closeButton");
const footer = document.querySelector("footer");
let trenutnaGodina = new Date().getFullYear();

const formData={};
const submitButton = document.getElementById("submitButton");
let isDisabled = true;
let ime = "";
let email = "";
let naslov = "";
let poruka = "";
ime = document.getElementById("ime").value;
email = document.getElementById("email").value;
naslov = document.getElementById("naslov").value;
poruka = document.getElementById("poruka").value;

footer.textContent = `© ${trenutnaGodina} Požega`;

function otvoriMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        hamburger.classList.remove("hideHamburger");
        closeButton.classList.remove("showCloseButton");
    } else {
        menu.classList.add("showMenu");
        hamburger.classList.add("hideHamburger");
        closeButton.classList.add("showCloseButton");
    }
}

function onInputChange(e){
    const value = e.target.value;
    submitButton.disabled=false;
    if(value){
        ime = value;
    }
}

function saveData(){
    if(ime && email && naslov && poruka){
        formData.ime = ime;
        formData.email = email;
        formData.naslov = naslov;
        formData.poruka = poruka;
        submitButton.disabled=false;
        alert("Pitanje je poslato.");
    } else {
        alert("Molimo vas da popunite sva polja forme.");
        isDisabled=true;
        return;
    }
}

hamburger.addEventListener("click", otvoriMenu);
closeButton.addEventListener("click", otvoriMenu);
