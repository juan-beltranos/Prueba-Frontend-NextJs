import { Form } from 'react-bootstrap';

const PokemonSelector = ({ handleTypeChange }) => {
  return (
    <Form.Group controlId="">
      <Form.Label>Selecciona un elemento:</Form.Label>
      <Form.Control as="select" onChange={handleTypeChange} >
        <option value="">Todos los elementos</option>
        <option value="fire">Fuego</option>
        <option value="water">Agua</option>
        <option value="ground">Tierra</option>
      </Form.Control>
    </Form.Group>
  );
};

export default PokemonSelector;
