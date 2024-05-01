
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

