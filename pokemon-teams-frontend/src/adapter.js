const Adapter = {
    baseUrl: 'http://localhost:3000/trainers',
    getTrainers: function getTrainers() {
        return fetch(Adapter.baseUrl).then(resp => resp.json())
    },

    addPokemon: function addPokemon(data) {
        const postUrl = 'http://localhost:3000/pokemons'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(postUrl, options).then(resp => resp.json())
    },

    deletePokemon: function deletePokemon(id) {
        const deleteUrl = `http://localhost:3000/pokemons/${id}`
        const options = {
            method: 'DELETE'
        }
        return fetch(deleteUrl, options).then(resp => resp.json())
    }

}