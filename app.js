// s
"use strict";
async function asinhronaFunkcija(number) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/todos/${number}`
		);

		if (!response.ok) {
			throw new Error(`Http error: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Nesto je poslo po zlu:", error);
	}
}

const todos2 = asinhronaFunkcija(2);
finalanRezultodos2tat.then((data) => {
	console.log(data);
});

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".closeButton");
const footer = document.querySelector("footer");
let trenutnaGodina = new Date().getFullYear();

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
