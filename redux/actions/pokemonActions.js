import axios from 'axios';
import {
  SET_POKEMON_LIST,
  SET_FILTERED_POKEMON_LIST,
  SET_SELECTED_TYPE,
  SET_SHOW_MODAL,
  SET_SELECTED_POKEMON,
  SET_SELECTED_POKEMONS,
  SET_VIEWED_POKEMONS
} from '../types';

export const fetchPokemon = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const results = response.data.results;
      const pokemonList = results.map((pokemon) => {
        const id = pokemon.url.split('/')[6];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
        return { ...pokemon, url: picture };
      });
      dispatch(setPokemonList(pokemonList));
      dispatch(setFilteredPokemonList(pokemonList));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPokemonElement = (element) => {
  return async (dispatch) => {
    try {
      if (element === '') {
        fetchPokemon()
      } else {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${element}?limit=50`);
        const results = response.data.pokemon;
        const pokemonList = results.map((pokemonElement) => {
          const { pokemon } = pokemonElement
          const id = pokemon.url.split('/')[6];
          const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
          return { ...pokemon, url: picture };
        });
        dispatch(setFilteredPokemonList(pokemonList));
      }

    } catch (error) {
      console.log(error);
    }
  };
};

export const setPokemonList = (pokemonList) => {
  return {
    type: SET_POKEMON_LIST,
    payload: pokemonList
  };
};

export const setFilteredPokemonList = (filteredPokemonList) => {
  return {
    type: SET_FILTERED_POKEMON_LIST,
    payload: filteredPokemonList
  };
};

export const setSelectedType = (selectedType) => {
  return {
    type: SET_SELECTED_TYPE,
    payload: selectedType
  };
};

export const setShowModal = (showModal) => {
  return {
    type: SET_SHOW_MODAL,
    payload: showModal
  };
};

export const setSelectedPokemon = (selectedPokemon) => {
  return {
    type: SET_SELECTED_POKEMON,
    payload: selectedPokemon
  };
};

export const setSelectedPokemons = (selectedPokemons) => {
  return {
    type: SET_SELECTED_POKEMONS,
    payload: selectedPokemons
  };
};

export const setViewedPokemons = (viewedPokemons) => {
  return {
    type: SET_VIEWED_POKEMONS,
    payload: viewedPokemons
  };
};
