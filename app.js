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
const popupWindow = document.getElementById("popupWindow");
const closePopupButton = document.getElementById("closePopupButton");
const newPopupWindow = document.getElementById("newPopupWindow");
const closeNewPopupButton = document.getElementById("closeNewPopupButton");
const formData={};
const popupViseDetalja = document.getElementById("popupViseDetalja");
const closeViseDetaljaPopupButton = document.getElementById("closeViseDetaljaPopupButton");
const submitButton = document.getElementById("submitButton");
let isDisabled = true;
let ime = "";
let email = "";
let naslov = "";
let poruka = "";

const pathName = "/index.html";
const contactPathName = '"/contact.html"';
function showPopup() {
    if (window.location.pathname === pathName) {
        popupWindow.style.display = "block";
    }
}

if (window.location.pathname === contactPathName) {
    ime = document.getElementById("ime").value;
    email = document.getElementById("email").value;
    naslov = document.getElementById("naslov").value;
    poruka = document.getElementById("poruka").value;
}

function closePopup() {
    popupWindow.style.display = "none";
}
document.getElementById("buttonNo").addEventListener("click", function () {
    window.open("https://www.lazalazarevic.rs/", "_blank");
});
document.getElementById("buttonYes").addEventListener("click", function () {
        popupWindow.style.display = "none";
        newPopupWindow.style.display = "block";
});
function closeNewPopup() {
    newPopupWindow.style.display = "none";
}

setTimeout(showPopup, 3000);

if (document.getElementById("viseDetalja")) {
    document.getElementById("viseDetalja").addEventListener("click", function () {
            popupViseDetalja.style.display = "block";
        });
    function closePopupViseDetalja() {
        popupViseDetalja.style.display = "none";
    }
}

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
closePopupButton.addEventListener("click", closePopup);
closeNewPopupButton.addEventListener("click", closeNewPopup);
if (document.getElementById("viseDetalja")) {
    closeViseDetaljaPopupButton.addEventListener("click", closePopupViseDetalja);
}
