import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PokemonCarousel = ({ filteredPokemonList, handleShowModal, isPokemonSelected, isPokemonDiscarded, isPokemonViewed }) => {
  return (
    <Carousel>
      {filteredPokemonList.map((pokemon, index) => (
        <Carousel.Item
          key={index}
          onClick={() => handleShowModal(pokemon.name)}
        >
          <div className='d-flex justify-content-end align-items-center mx-5 gap-2'>

            {isPokemonSelected(pokemon) && <Image src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" alt="pokeball" className='pokeball' width={30} height={30} />}

            {isPokemonViewed(pokemon) ? <FaEye className="eye-icon" fill='black' /> : <FaEyeSlash className="eye-slash" fill='black' />}

          </div>

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
