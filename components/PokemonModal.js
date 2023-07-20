import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { usePalette } from 'react-palette'

const PokemonModal = ({ showModal, handleCloseModal, selectedPokemon, handleSelectPokemon, handleDiscardPokemon, selectedPokemons }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonInclude, setPokemonInclude] = useState(true);
  // const [picture, setPicture] = useState('');
  // const { data } = usePalette(picture)

  useEffect(() => {
    if (selectedPokemon) {
      setIsLoading(false);
      pokemonDuplicate(selectedPokemons);
      // setPicture(selectedPokemon.sprites.other['official-artwork'].front_default)
    }
  }, [selectedPokemon]);

  const pokemonDuplicate = (selectedPokemons) => {
    return setPokemonInclude(selectedPokemons.some(pokemon => pokemon.name === selectedPokemon.name))
  }

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      {isLoading ? (
        <Modal.Body>
          <p>Cargando...</p>
        </Modal.Body>
      ) : (
        <>
          <Modal.Header closeButton >
            <Modal.Title>{selectedPokemon.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body  >
            <div className='text-center'>
              <img
                src={selectedPokemon.sprites.other['official-artwork'].front_default}
                alt={selectedPokemon.name}
              />
            </div>

            <div className='card-content-pokemon'>
              <div className='d-flex justify-content-evenly'>
                <p className='fw-bold'>Altura: {selectedPokemon.height}&quot;</p>
                <p className='fw-bold'>Peso: {selectedPokemon.weight}Lb</p>
              </div>

              <p className='mb-0 fw-bold'>Sprites:</p>

              <div className='d-flex justify-content-evenly'>
                <img
                  src={selectedPokemon.sprites.front_default}
                  alt={selectedPokemon.name}
                />
                <img
                  src={selectedPokemon.sprites.back_default}
                  alt={selectedPokemon.name}
                />
                <img
                  src={selectedPokemon.sprites.front_shiny}
                  alt={selectedPokemon.name}
                />
              </div>

              <p className='fw-bold'>Elementos:</p>
              <ul className='d-flex gap-5'>
                {selectedPokemon.types.map((type) => (
                  <li key={type.slot}>{type.type.name}</li>
                ))}
              </ul>
            </div>
          </Modal.Body>
          <Modal.Footer >
            <Button variant="danger" onClick={handleDiscardPokemon}>
              Descartar
            </Button>
            {
              !pokemonInclude && <Button variant="primary" onClick={handleSelectPokemon}>
                Seleccionar
              </Button>
            }
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default PokemonModal;
