fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
	if (response.ok) {
		return response.json();
	} else {
		throw new Error("interner konekcija nije u redu");
	}
});

const submitButton = document.getElementById("submitbutton");
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".closeButton");
const footer = document.querySelector("footer");
let trenutnaGodina = new Date().getFullYear();

let buttonContainer = document.getElementById("buttonContainer");
buttonContainer ? buttonContainer.classList.add("flex-container") : null;
let naslovPopupa = document.getElementById("naslov");

const popupWindow = document.getElementById("popupWindow");
const closePopupButton = document.getElementById("closePopupButton");

const buttonYes = document.createElement("button");
buttonYes.textContent = "Da";

const buttonNo = document.createElement("button");
buttonNo.textContent = "Ne";

const viseDetaljaButton = document.getElementById("viseDetalja");
const formData = {};

let isDisabled = true;

let ime = "";
let email = "";
let naslov = "";
let poruka = "";

const pathName = "/index.html";

function showPopup() {
	if (window.location.pathname === pathName) {
		//znaci ako je route koji mi zelimo (index.html)

		popupWindow.style.display = "block"; //prikazi popup

		buttonContainer.appendChild(buttonYes); //dodaj button YES u popup
		buttonContainer.appendChild(buttonNo); // dodaj button No u popup

		closePopupButton.addEventListener("click", () => {
			popupWindow.style.display = "none";
		}); // on X button click

		buttonYes.addEventListener("click", () => {
			//ako user klikne na Da/Yes
			if (buttonContainer.contains(buttonYes)) {
				//contains je metoda koja ispituje da li postoji nesto u nekom nizu i vraca boolean, cisto radi predostroznosti
				buttonContainer.removeChild(buttonYes); // ukloni button YES u popup
			}
			if (buttonContainer.contains(buttonNo)) {
				buttonContainer.removeChild(buttonNo);
			}
			naslovPopupa.textContent = "Hvala dragi fanovi, znamo i same hehe"; //promeni se text content naslova
		});

		buttonNo.addEventListener("click", () => {
			//ako se user usudi da klikne na Ne/No
			popupWindow.style.display = "none";
			window.open("https://www.lazalazarevic.rs/", "_blank");
		});
	}
}

viseDetaljaButton
	? viseDetaljaButton.addEventListener("click", () => {
			showPopup();
	  })
	: null;

// if (window.location.pathname === contactPathName) {
// 	ime = document.getElementById("ime").value;
// 	email = document.getElementById("email").value;
// 	naslov = document.getElementById("naslov").value;
// 	poruka = document.getElementById("poruka").value;
// }

function closePopup() {
	popupWindow.style.display = "none";
}
// document.getElementById("buttonYes").addEventListener("click", function () {
// 	window.open("https://www.lazalazarevic.rs/", "_blank");
// });

setTimeout(showPopup, 3000);

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
