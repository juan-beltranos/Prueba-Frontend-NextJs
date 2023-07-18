import { Form } from 'react-bootstrap';

const PokemonSelector = ({ selectedType, handleTypeChange }) => {
  return (
    <Form.Group controlId="pokemonType">
      <Form.Label>Selecciona un tipo:</Form.Label>
      <Form.Control as="select" onChange={handleTypeChange} value={selectedType}>
        <option value="">Todos los tipos</option>
        <option value="fire">Fuego</option>
        <option value="water">Agua</option>
        <option value="ground">Tierra</option>
      </Form.Control>
    </Form.Group>
  );
};

export default PokemonSelector;
