const pkemonDetalhe = document.getElementById('pokemonDetalhe')

function convertPokemonDatalhesToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="name">${pokemon.name}</span>
            <span class="number">${pokemon.number}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.type.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
    `
}