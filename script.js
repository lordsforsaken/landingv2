
let counter = 1;

function wait(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, ms)
	})
}

setInterval(async() => {
	console.log("setInterval", counter)
	let cardId = counter % 3;
	for (let i = 0; i < 3; i++) {
		const card = document.getElementById(`card-${i}`)
		// first we do fade out

		if (i !== cardId && card.style.display == "block") {
			card.classList.remove("animate__slideInRight")
			// card.classList.add("animate__slideOutLeft")
			card.classList.add("animate__fadeOut")
			await wait(1050)
			card.style.display = "none"

		} 

	}

	for (let i = 0; i < 3; i++) {
		const card = document.getElementById(`card-${i}`)
		// then fade in

		if (i == cardId) {
			card.style.display = "block"
			card.classList.remove("animate__fadeOut")
			card.classList.add("animate__slideInRight")
		} 
	}

	for (let i = 0; i < 3; i++) {
		const icon = document.getElementById(`icon-${i}`)
		// then fade in

		if (i == cardId) {
			icon.style.opacity = 1;
		} else {
			icon.style.opacity = 0.5;
		}
	}

	counter++

}, 5000)

// // Function to add screen size classes
// function addScreenSizeClass() {
// const width = window.innerWidth;
// const mainButtons = document.getElementById("main-buttons");
// const raritiesDesktop = document.getElementById("desktop");
// const raritiesMobile = document.getElementById("mobile")

// if (width <= 767) {
//   mainButtons.classList.remove('d-grid');
//   // raritiesDesktop.classList.remove('d-flex')
//   // raritiesDesktop.style.display = "none";
//   // raritiesMobile.style.display = "flex";
//   console.log(raritiesDesktop)
// } else {
//   mainButtons.classList.add('d-grid');
//   // raritiesMobile.classList.remove('d-flex')
//   // raritiesDesktop.style.display = "flex";
//   // raritiesMobile.style.display = "none";
// }
// }

// // Call the function when the page loads and on resize
// window.onload = addScreenSizeClass;
// window.onresize = addScreenSizeClass;