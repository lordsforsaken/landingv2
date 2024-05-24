
let counter = 1;

let text = [
	"Ancient Egyptian god of the dead, associated with mummification and the afterlife, often depicted as a man with the head of a jackal",
	"Zeus is the sky and thunder god in ancient Greek religion and mythology, who rules as king of the gods on Mount Olympus",
	"Odin has many names and is the god of both war and death. Half of the warriors who die in battle are taken to his hall of Valhalla"
]

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
	const description = document.getElementById("card-description-text");
	for (let i = 0; i < 3; i++) {
		const card = document.getElementById(`card-${i}`)
		// first we do fade out

		if (i !== cardId && card.style.display == "block") {
			description.innerText = text[cardId]
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

/// TRAILER

function startTrailer() {
	document.getElementById("video").innerHTML = '<iframe id="videoEmbed" src="https://www.youtube.com/embed/-5Kkxuuvaq4?si=Lnl7PdC7180i2twM&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
	document.getElementById("videoEmbed").style.height = document.getElementById("home").offsetHeight+'px'
	document.getElementById("video").style.zIndex = 10;
	document.getElementById("video").style.top = "140px";
	setTimeout(() => {
		document.getElementById("video").style.top = "-1500px";
	}, 22000)
}

