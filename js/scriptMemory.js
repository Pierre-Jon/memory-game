const images = [
  "img/fruits/1.svg",
  "img/fruits/2.svg",
  "img/fruits/3.svg",
  "img/fruits/4.svg",
  "img/fruits/5.svg",
  "img/fruits/6.svg",
]

// Double mes images dans un nouveau tableau pour avoir 6 paires = 12 cartes
const paires = [...images, ...images]
paires.sort(() => 0.5 - Math.random())

let containerCards = "";
let grid = document.querySelector(".grid")

// créer une grille avec 2x 12 cartes superposées
for (let i = 0; i < paires.length; i++) {
  containerCards += `
        <div class="cards">
            <div class="deux-faces">
                <div class="face-cache">
                    <img src="img/question.svg">
                </div>
                <div class="face-visuel">
                    <img src="${paires[i]}" data-img="${paires[i]}">
                </div>
            </div>
        </div>
`
}
grid.innerHTML = containerCards;

let clicked = ""
let firstChoice = ""
let secondChoice = ""
let imageFaceVisible = ""
let cpt = 0
let alreadyClicked = ""
let delay = 1200




document.addEventListener('keydown', (event) => {
    if (event.code === "Space") {
      console.log("barre space pressé")

        let noFlip = document.querySelectorAll(".flip")
        noFlip.forEach(card => {
        card.classList.remove("flip")
        })

        let noMatch = document.querySelectorAll(".match")
        noMatch.forEach(card => {
        card.classList.remove("match")
        })
        
        // let reset = querySelectorAll(".face-visuel")
        // for (let i = 0; i < reset.length; i++) {
        //   reset[i].sort(() => 0.5 - Math.random())
        // }
    }
  })



grid.addEventListener("click", function (event) {
  clicked = event.target.closest(".deux-faces"); // cible le selecteur .deux-faces

  //  Si on clique deux fois sur la même carte ou sur une carte déjà trouvée (paire), alors ne rien faire."
  if (!clicked || clicked === alreadyClicked || clicked.classList.contains("match")
      ) {

  } else {
    if (cpt < 2) { // limite à 2 le nombre de carte retournée
      cpt++; // cpt +1 à chaque clique
      if (cpt === 1) {
        imageFaceVisible = clicked.querySelector(".face-visuel img"); // cible l'image dans clicked
        firstChoice = imageFaceVisible.dataset.img; // on recupère la valeur de l'attribut
        clicked.classList.add("flip") // ajout de la classe flip pour qu'elle se retourne
        
      } else {
        imageFaceVisible = clicked.querySelector(".face-visuel img");
        secondChoice = imageFaceVisible.dataset.img;
        clicked.classList.add("flip")
      }

      if (firstChoice !== "" && secondChoice !== "") { // Si les 2 cartes ont bien recupéré un clique
        if (firstChoice === secondChoice) { // On verifie que 2 images sont identique
          setTimeout(match, delay)
          setTimeout(resetChoice, delay)
        } else {
          setTimeout(resetChoice, delay)
        }
      }
      alreadyClicked = clicked;
      console.log(clicked);
    }
  }
})












// FONCTIONS

function resetChoice() {
  firstChoice = ""
  secondChoice = ""
  cpt = 0

  let selected = document.querySelectorAll(".flip") // Selectionne tous les class flip
  selected.forEach((card) => {
    if (!card.classList.contains("match")) { // Verifie qu'il n'y a pas déjà eu un match
      card.classList.remove("flip") // Retourne la carte
    }
  })
}

function match() {
  let selected = document.querySelectorAll(".flip")
  selected.forEach((card) => {
    card.classList.add("match") // Attribue la class match
  })
}
