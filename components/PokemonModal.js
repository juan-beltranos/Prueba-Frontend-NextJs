import { Modal, Button } from 'react-bootstrap';

const PokemonModal = ({ showModal, handleCloseModal, selectedPokemon, handleSelectPokemon, handleDiscardPokemon }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      {selectedPokemon && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPokemon.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='text-center'>
              <img
                src={selectedPokemon.sprites.other['official-artwork'].front_default}
                alt={selectedPokemon.name}
              />
            </div>

            <p className='fw-bold'>Height: {selectedPokemon.height}</p>
            <p className='fw-bold'>Weight: {selectedPokemon.weight}</p>

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

            <p className='fw-bold'>Types:</p>
            <ul>
              {selectedPokemon.types.map((type) => (
                <li key={type.slot}>{type.type.name}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDiscardPokemon}>
              Descartar
            </Button>
            <Button variant="primary" onClick={handleSelectPokemon}>
              Seleccionar
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default PokemonModal;
