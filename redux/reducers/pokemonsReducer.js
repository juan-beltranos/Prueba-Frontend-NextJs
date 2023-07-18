import {
    SET_POKEMON_LIST,
    SET_FILTERED_POKEMON_LIST,
    SET_SELECTED_TYPE,
    SET_SHOW_MODAL,
    SET_SELECTED_POKEMON,
    SET_SELECTED_POKEMONS,
    SET_VIEWED_POKEMONS
  } from '../types';
  
  const initialState = {
    pokemonList: [],
    filteredPokemonList: [],
    selectedType: '',
    showModal: false,
    selectedPokemon: null,
    selectedPokemons: [],
    viewedPokemons: []
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_POKEMON_LIST:
        return {
          ...state,
          pokemonList: action.payload
        };
      case SET_FILTERED_POKEMON_LIST:
        return {
          ...state,
          filteredPokemonList: action.payload
        };
      case SET_SELECTED_TYPE:
        return {
          ...state,
          selectedType: action.payload
        };
      case SET_SHOW_MODAL:
        return {
          ...state,
          showModal: action.payload
        };
      case SET_SELECTED_POKEMON:
        return {
          ...state,
          selectedPokemon: action.payload
        };
      case SET_SELECTED_POKEMONS:
        return {
          ...state,
          selectedPokemons: action.payload
        };
      case SET_VIEWED_POKEMONS:
        return {
          ...state,
          viewedPokemons: action.payload
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  