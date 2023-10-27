// dsd

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".closeButton");

const footer = document.querySelector(".footer");
let trenutnaGodina = new Date().getFullYear();

footer.textContent = `copyelement ${trenutnaGodina} Pozega`;

function otvoriMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		hamburger.classList.remove("hideHamburger");
		closeButton.classList.remove("showCloseIcon");
	} else {
		menu.classList.add("showMenu");
		console.log("work");
		hamburger.classList.add("hideHamburger");
		closeButton.classList.add("showCloseIcon");
	}
}

const nazivFunkcije = () => {
	console.log("kodsood");
};

hamburger.addEventListener("click", () => {
	console.log("kodsood");
});
closeButton.addEventListener("click", otvoriMenu);
