import { Form } from 'react-bootstrap';

const PokemonSelector = ({ handleTypeChange }) => {
  return (
    <Form.Group>
      <Form.Label className='fw-bold fs-2'>Selecciona un elemento y escoge tu Pokémon:</Form.Label>
      <Form.Control as="select" onChange={handleTypeChange} className='shadow bg-white rounded-3 fs-4'>
        <option value="">Todos los elementos</option>
        <option value="fire">Fuego</option>
        <option value="water">Agua</option>
        <option value="ground">Tierra</option>
        <option value="electric">Electrico</option>
        <option value="ice">Hielo</option>
      </Form.Control>
    </Form.Group>
  );
};

export default PokemonSelector;
