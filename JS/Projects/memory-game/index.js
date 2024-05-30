const symbols = [
	"&#x1F602;",
	"&#x1F60E;",
	"&#x1F60D;",
	"&#x1F61C;",
	"&#x1F643;",
	"&#x1F913;",
	"&#x1F602;",
	"&#x1F60E;",
	"&#x1F60D;",
	"&#x1F61C;",
	"&#x1F643;",
	"&#x1F913;",
]
const cards = symbols.concat(symbols)

let firstCard = null
let secondCard = null
let canFlip = true

const moveCount = document.getElementById("moves")
const timer = document.getElementById("timer")
const gameContainer = document.getElementById("game-container")
const shuffledCards = shuffle(cards)
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}
shuffledCards.forEach((card, index) => {
	const cardEleement = document.createElement("div")
	cardEleement.classList.add("card")
	cardEleement.dataset.value = card
	cardEleement.dataset.index = index
	cardEleement.addEventListener("click", () => flipcards(cardEleement))
	gameContainer.appendChild(cardEleement)
})
function flipcards(card) {
	if (!canFlip || card === firstCard) {
		return
	}
	console.log(card.textContent)
	card.innerHTML = card.dataset.value
	console.log(card.textContent)
	if (!firstCard) {
		firstCard = card
		return
	}
	if (!secondCard) {
		secondCard = card
		if (firstCard.dataset.value === secondCard.dataset.value) {
			firstCard.removeEventListener("click", () => flipcards(firstCard))
			secondCard.removeEventListener("click", () => flipcards(firstCard))
			firstCard = null
			debugger
			secondCard = null
		} else {
			canFlip = false
			setTimeout(() => {
				firstCard.textContent = ""
				secondCard.textContent = ""
				debugger
				firstCard = null
				secondCard = null
				canFlip = true
			}, 1000)
		}
	}
}
