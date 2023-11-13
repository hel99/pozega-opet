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

const formData = {};
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

const imeInput = document.getElementById("ime");
const forma = document.getElementById("formaBrate");

imeInput.addEventListener("input", (event) => {
	const value = event.target.value;
	console.log(value);
});

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

function showMessage(poruka) {
	document.getElementById("porukaAlert").textContent = poruka;
}

function checkEmptyField(value, fieldName) {
	const errorMessage = document.getElementById(`${fieldName}Error`);
	if (value.trim() === "") {
	  errorMessage.textContent = "Polje ne može biti prazno.";
	  return false;
	} else {
	  errorMessage.textContent = "";
	  return true;
	}
  }

async function handleSubmit(e) {
	e.preventDefault();

	const ime = document.getElementById("ime").value;
	const email = document.getElementById("email").value;
	const naslov = document.getElementById("naslovInput").value;
	const poruka = document.getElementById("poruka").value;

	const isImeValid = checkEmptyField(ime, "ime");
  	const isEmailValid = checkEmptyField(email, "email");
  	const isNaslovValid = checkEmptyField(naslov, "naslov");
  	const isPorukaValid = checkEmptyField(poruka, "poruka");

	if (ime && email && naslov && poruka) {
		const formData = new FormData();
		formData.append("ime", ime);
		formData.append("email", email);
		formData.append("naslov", naslov);
		formData.append("poruka", poruka);

		const submitButton = document.getElementById("submitButton");
		submitButton.disabled = true;

		fetch(e.target.action, {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					showMessage("Hvala na postavljenom pitanju!");
					forma.reset();
				} else {
					response.json().then((data) => {
						if (Object.hasOwn(data, "errors")) {
							console.log(data);
						} else {
							showMessage("Postoji neki problem.");
						}
					});
				}
			})
			.catch((error) => {
				showMessage("Postoji neki problem.");
			});
	} else {	
		showMessage("Popunite sva polja.");
	}
}
forma.addEventListener("submit", handleSubmit);
hamburger.addEventListener("click", otvoriMenu);
closeButton.addEventListener("click", otvoriMenu);
