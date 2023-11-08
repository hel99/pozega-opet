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
var popupWindow = document.getElementById("popupWindow");
var closePopupButton = document.getElementById("closePopupButton");
var newPopupWindow = document.getElementById("newPopupWindow");
var closeNewPopupButton = document.getElementById("closeNewPopupButton");
var formData={};
var popupViseDetalja = document.getElementById("popupViseDetalja");
var closeViseDetaljaPopupButton = document.getElementById("closeViseDetaljaPopupButton");

function showPopup() {
    popupWindow.style.display = "block";
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

setTimeout(showPopup, 30000);

document.getElementById("viseDetalja").addEventListener("click", function () {
	popupViseDetalja.style.display = "block";
});

function closePopupViseDetalja(){
	popupViseDetalja.style.display = "none";
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

function saveData(){
var ime = document.getElementById("ime").value;
var email = document.getElementById("email").value;
var naslov = document.getElementById("naslov").value;
var poruka = document.getElementById("poruka").value;

if(ime && email && naslov && poruka){
formData.ime = ime;
formData.email = email;
formData.naslov = naslov;
formData.poruka = poruka;
alert("Pitanje je poslato.");
} else {
	alert("Molimo vas da popunite sva polja forme.");
}
}

hamburger.addEventListener("click", otvoriMenu);
closeButton.addEventListener("click", otvoriMenu);
closePopupButton.addEventListener("click", closePopup);
closeNewPopupButton.addEventListener("click", closeNewPopup);
closeViseDetaljaPopupButton.addEventListener("click", closePopupViseDetalja);
