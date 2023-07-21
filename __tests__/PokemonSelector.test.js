import renderer from 'react-test-renderer';
import PokemonSelector from '../components/PokemonSelector';

it('selected Pokemons state', () => {
    const element = 'fire'
    const component = renderer.create(
        <PokemonSelector handleTypeChange={element} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});