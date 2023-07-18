import { useEffect } from 'react';
import axios from 'axios';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPokemon,
  fetchPokemonElement,
  setShowModal,
  setSelectedPokemon,
  setSelectedPokemons,
  setViewedPokemons
} from '../redux/actions/pokemonActions';

//Components
import PokemonSelector from './PokemonSelector';
import PokemonCarousel from './PokemonCarousel';
import PokemonModal from './PokemonModal';
import SelectedPokemonList from './SelectedPokemonList ';

const Home = () => {

  const dispatch = useDispatch();

  const {
    filteredPokemonList,
    selectedType,
    showModal,
    selectedPokemon,
    selectedPokemons,
    viewedPokemons
  } = useSelector((state) => state.pokemonsReducer);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    dispatch(fetchPokemonElement(selectedType));
  };

  const handleShowModal = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      dispatch(setSelectedPokemon(response.data));
      dispatch(setShowModal(true));
      dispatch(setViewedPokemons([...viewedPokemons, response.data.name]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  const handleSelectPokemon = () => {
    dispatch(setSelectedPokemons([...selectedPokemons, selectedPokemon]));
    dispatch(setShowModal(false));
  };

  const handleDiscardPokemon = () => {
    const updatedSelectedPokemons = selectedPokemons.filter((pokemon) => pokemon.name !== selectedPokemon.name);
    dispatch(setSelectedPokemons(updatedSelectedPokemons));
    dispatch(setShowModal(false));
  };

  const isPokemonSelected = (pokemon) => {
    return selectedPokemons.some((selectedPokemon) => selectedPokemon.name === pokemon.name);
  };

  const isPokemonDiscarded = (pokemon) => {
    return selectedPokemon && selectedPokemon.name === pokemon.name && !isPokemonSelected(pokemon);
  };

  const isPokemonViewed = (pokemon) => {
    return viewedPokemons.includes(pokemon.name);
  };

  return (
    <div className='container p-5'>
      <h1>Pokémon Slider</h1>

      <PokemonSelector
        selectedType={selectedType}
        handleTypeChange={handleTypeChange}
      />
      
      <br />

      <PokemonCarousel
        filteredPokemonList={filteredPokemonList}
        handleShowModal={handleShowModal}
        isPokemonSelected={isPokemonSelected}
        isPokemonDiscarded={isPokemonDiscarded}
        isPokemonViewed={isPokemonViewed}
      />

      <PokemonModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedPokemon={selectedPokemon}
        handleSelectPokemon={handleSelectPokemon}
        handleDiscardPokemon={handleDiscardPokemon}
      />

      <SelectedPokemonList selectedPokemons={selectedPokemons} />

    </div>
  );
};

export default Home;
