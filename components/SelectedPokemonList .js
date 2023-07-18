
const SelectedPokemonList = ({ selectedPokemons }) => {
    return (
        <div className='mt-5'>
            <h2>Pokémon Seleccionados:</h2>
            {selectedPokemons.length === 0 ? (
                <p>No se han seleccionado Pokémon.</p>
            ) : (
                <ul>
                    {selectedPokemons.map((pokemon) => (
                        <div className='d-flex align-items-center' key={pokemon.name}>
                            <li>
                                <img
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                />
                                {pokemon.name}
                            </li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectedPokemonList;
