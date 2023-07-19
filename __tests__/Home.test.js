import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import { crealegacy_createStore as createStore } from 'redux';
import reducer from '../store/reducer';

import Home from '../components/Home';

// Mock de Redux
const store = createStore(reducer, {
  pokemon: {
    name: 'Pikachu',
    sprites: {
      front_default: 'pikachu.png',
    },
    id: 25,
  },
});

const renderWithRedux = (component) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('HomePage', () => {
  test('renders search input and button', () => {
    renderWithRedux(<Home />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: 'Search' });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('displays Pokémon information on search', () => {
    renderWithRedux(<Home />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(inputElement, { target: { value: 'pikachu' } });
    fireEvent.click(buttonElement);

    const nameElement = screen.getByText('Pikachu');
    const imageElement = screen.getByAltText('Pikachu');
    const idElement = screen.getByText('ID: 25');

    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(idElement).toBeInTheDocument();
  });
});
