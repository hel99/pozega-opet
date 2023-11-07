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

setTimeout(showPopup, 5000);

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

hamburger.addEventListener("click", otvoriMenu);
closeButton.addEventListener("click", otvoriMenu);
closePopupButton.addEventListener("click", closePopup);
closeNewPopupButton.addEventListener("click", closeNewPopup);
