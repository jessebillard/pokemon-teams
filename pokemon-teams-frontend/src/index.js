document.addEventListener('DOMContentLoaded', init)

const main = document.getElementById('main')
let cardIdCounter = 0

function init() {
    main.innerHTML = ''
    Adapter.getTrainers().then(trainers => {
        trainers.forEach(trainer => {
            main.innerHTML += renderTrainerCard(trainer)
        });
    })

}

function renderTrainerCard(trainer) {
    
    let pokeList = trainer.pokemons.map(pokemon => {
        return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
    })

    let cardTemplate = `<div class="card" data-id="${cardIdCounter += 1}"><p>${trainer.name}</p>
       <button id="add-Btn" data-trainer-id="${trainer.id}">Add Pokemon</button>
       <ul>
         ${pokeList.join("")}
       </ul>
     </div>`
     return cardTemplate;
}

main.addEventListener('click', (e) => {
    if (e.target.id === "add-Btn") {
        Adapter.addPokemon({trainer_id: e.target.dataset.trainerId}).then(pokemon => {
            init()
        })
        
    } else if (e.target.className === "release") {
        
        Adapter.deletePokemon(e.target.dataset.pokemonId)
        e.target.parentElement.remove()
    }
})