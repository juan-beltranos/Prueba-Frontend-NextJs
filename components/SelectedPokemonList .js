import PokemonModal from './PokemonModal'

const SelectedPokemonList = ({ selectedPokemons, handleShowModal }) => {
    return (
        <div className='mt-5'>
            <h2>Pokémon Atrapados:</h2>
            {selectedPokemons.length === 0 ? (
                <p>No se han seleccionado Pokémon.</p>
            ) : (
                <ul className="grid-pokemon p-0" >
                    {selectedPokemons.map((pokemon) => (
                        <div key={pokemon.name} onClick={() => handleShowModal(pokemon.name)}>
                            <li style={{ listStyle: 'none' }} className="d-flex align-items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" alt="pokeball" className='pokeball' />
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
            <PokemonModal />
        </div>
    );
};

export default SelectedPokemonList;
