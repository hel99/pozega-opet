"use strict";

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
	if (response.ok) {
		return response.json();
	} else {
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
const viseDetaljaButton = document.getElementById("viseDetalja");
let buttonContainer = document.getElementById("buttonContainer");
buttonContainer ? buttonContainer.classList.add("flex-container") : null;
let naslovPopupa = document.getElementById("naslov");
const buttonYes = document.createElement("button");
buttonYes.textContent = "Da";
const buttonNo = document.createElement("button");
buttonNo.textContent = "Ne";
<<<<<<< HEAD:index.js

function showPopup() {
    
        if (!popupWindow.contains(buttonContainer)) {
            popupWindow.appendChild(buttonContainer)
        } 
        naslovPopupa.textContent = "Je l' nam dobar sajt?";
        popupWindow.style.display = "block";
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        buttonContainer.style.display="flex";
        buttonContainer.style.justifyContent="space-around";
        closePopupButton.addEventListener("click", ()=>{
            popupWindow.style.display = "none";
        });
        buttonYes.addEventListener("click", () => {
=======
const buttons = document.getElementsByClassName("viseDetalja");
const formData = {};
const submitButton = document.getElementById("submitButton");
let isDisabled = true;
let ime = "";
let email = "";
let naslov = "";
let poruka = "";

const pathName = "/index.html";
const contactPathName = "/contact.html";

function showPopup(isClickedOnButton) {
	if (
		window.location.pathname === pathName ||
		window.location.pathname === "/"
	) {
		if (isClickedOnButton) {
			naslovPopupa.textContent = "U pripremi...";
			popupWindow.style.display = "block";
>>>>>>> f2a523498dcc032171307150f8cc62a103fd1e74:app.js
			if (buttonContainer.contains(buttonYes)) {
				buttonContainer.removeChild(buttonYes);
			}
			if (buttonContainer.contains(buttonNo)) {
				buttonContainer.removeChild(buttonNo);
			}
		} else {
			if (!popupWindow.contains(buttonContainer)) {
				popupWindow.appendChild(buttonContainer);
			}

			naslovPopupa.textContent = "Je l' nam dobar sajt?";
			popupWindow.style.display = "block";
			buttonContainer.appendChild(buttonYes);
			buttonContainer.appendChild(buttonNo);
			buttonContainer.style.display = "flex";
			buttonContainer.style.justifyContent = "space-around";
			closePopupButton.addEventListener("click", () => {
				popupWindow.style.display = "none";
			});

			buttonYes.addEventListener("click", () => {
				if (buttonContainer.contains(buttonYes)) {
					buttonContainer.removeChild(buttonYes);
				}
				if (buttonContainer.contains(buttonNo)) {
					buttonContainer.removeChild(buttonNo);
				}
				naslovPopupa.textContent = "Hvala, znamo.";
			});
			buttonNo.addEventListener("click", () => {
				popupWindow.style.display = "none";
				window.open("https://www.lazalazarevic.rs/", "_blank");
			});
		}
	}

	if (window.location.pathname === "/about.html") {
		closePopupButton.addEventListener("click", () => {
			popupWindow.style.display = "none";
		});
<<<<<<< HEAD:index.js
        viseDetaljaButton.addEventListener("click", () => {
            naslovPopupa.textContent = "U pripremi...";
            buttonContainer.removeChild(buttonYes);
            buttonContainer.removeChild(buttonNo);
        })
    
=======

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", () => {
				naslovPopupa.textContent = "U pripremi...";
				popupWindow.style.display = "block";
			});
		}
	}
>>>>>>> f2a523498dcc032171307150f8cc62a103fd1e74:app.js
}

viseDetaljaButton
	? viseDetaljaButton.addEventListener("click", () => {
			showPopup(true);
	  })
	: null;

<<<<<<< HEAD:index.js
setTimeout(showPopup, 3000);
=======
true ? "uradi NEsto" : "Nemoj nista";

if (window.location.pathname === contactPathName) {
	ime = document.getElementById("ime").value;
	email = document.getElementById("email").value;
	naslov = document.getElementById("naslov").value;
	poruka = document.getElementById("poruka").value;
}

setTimeout(() => {
	showPopup(false);
}, 3000);
>>>>>>> f2a523498dcc032171307150f8cc62a103fd1e74:app.js

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

<<<<<<< HEAD:index.js
=======
function onInputChange(e) {
	const value = e.target.value;
	submitButton.disabled = false;
	if (value) {
		ime = value;
	}
}

function saveData() {
	if (ime && email && naslov && poruka) {
		formData.ime = ime;
		formData.email = email;
		formData.naslov = naslov;
		formData.poruka = poruka;
		submitButton.disabled = false;
		alert("Pitanje je poslato.");
	} else {
		alert("Molimo vas da popunite sva polja forme.");
		isDisabled = true;
		return;
	}
}

>>>>>>> f2a523498dcc032171307150f8cc62a103fd1e74:app.js
hamburger.addEventListener("click", otvoriMenu);
closeButton.addEventListener("click", otvoriMenu);

let brojedasda = "4";
console.log(brojedasda, typeof brojedasda);
console.log(+brojedasda, typeof +brojedasda);
