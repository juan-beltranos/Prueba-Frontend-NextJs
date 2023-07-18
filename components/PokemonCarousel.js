import { Carousel } from 'react-bootstrap';

const PokemonCarousel = ({ filteredPokemonList, handleShowModal, isPokemonSelected, isPokemonDiscarded, isPokemonViewed }) => {
  return (
    <Carousel>
      {filteredPokemonList.map((pokemon, index) => (
        <Carousel.Item
          key={index}
          onClick={() => handleShowModal(pokemon.name)}
          className={
            `${isPokemonSelected(pokemon) ? 'bg-info' : ''} 
            ${isPokemonDiscarded(pokemon) ? 'bg-danger' : ''} 
            ${isPokemonViewed(pokemon) ? 'bg-warning' : ''}`
          }
        >
          <img
            className="d-block m-auto"
            src={pokemon.url}
            alt={pokemon.name}
          />
          <Carousel.Caption className=''>
            <h2 className='fw-bold'>{pokemon.name}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PokemonCarousel;
