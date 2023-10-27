const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

console.log(menu);
console.log(hamburger);

function otvoriMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		
	} else {
		menu.classList.add("showMenu");
		console.log("work");
	
	}
}



closeButton.addEventListener("click", otvoriMenu);