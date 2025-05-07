const images = [
    "img/fruits/1.svg",
    "img/fruits/2.svg",
    "img/fruits/3.svg",
    "img/fruits/4.svg",
    "img/fruits/5.svg",
    "img/fruits/6.svg"
]

// Double mes images dans un nouveau tableau pour avoir 6 paires = 12 cartes 
const paires = [...images, ...images]; 
paires.sort(() => 0.5 - Math.random());

let containerCards = ""
let blocMain = document.querySelector(".gride")


// créer une grille avec 2x 12 cartes superposées
for (let i = 0; i < paires.length; i++) {
    containerCards += `
        <div class="cards">
            <div class="deux-faces">
                <div class="face-cache">
                    <img src="img/question.svg" alt="card-mystery">
                </div>
                <div class="face-visuel">
                    <img src="${paires[i]}" alt="card-visuel">
                </div>
            </div>
        </div>
`
blocMain.innerHTML = containerCards
}

const card = document.querySelectorAll(".deux-faces")
flipCard()



let temptab = []

const allcardVisble = document.querySelectorAll(".face-visuel")

allcardVisble.forEach(oneCardVisible => {
    oneCardVisible.addEventListener('click', () => {
        if (oneCardVisible.classList.contains('retourner')){
            temptab.push(oneCardVisible)
            console.log(temptab)
        }
  })
})






// FONCTIONS

function flipCard() {
    card.forEach((carte) => {
  carte.addEventListener('click', () => {
    carte.classList.toggle('retourner');
  })
})
}




// let image = "test"
// let tempoCard = null

// for (let i = 0; i < paires.length; i++){
//     if (paires[i] === "img/fruits/1.svg"){
//         console.log("ok")
//     }
// }

// paires.forEach(image, index => {
//     console.log(`Image ${index + 1} : ${image}`)
// });















