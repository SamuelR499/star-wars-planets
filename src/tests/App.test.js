import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

const MOCK_API_TEST = {
  count: 60,
  next: 'https://swapi-trybe.herokuapp.com/api/planets/?page=2',
  previous: null,
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/1/',
        'https://swapi-trybe.herokuapp.com/api/people/2/',
        'https://swapi-trybe.herokuapp.com/api/people/4/',
        'https://swapi-trybe.herokuapp.com/api/people/6/',
        'https://swapi-trybe.herokuapp.com/api/people/7/',
        'https://swapi-trybe.herokuapp.com/api/people/8/',
        'https://swapi-trybe.herokuapp.com/api/people/9/',
        'https://swapi-trybe.herokuapp.com/api/people/11/',
        'https://swapi-trybe.herokuapp.com/api/people/43/',
        'https://swapi-trybe.herokuapp.com/api/people/62/'
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/1/',
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/4/',
        'https://swapi-trybe.herokuapp.com/api/films/5/',
        'https://swapi-trybe.herokuapp.com/api/films/6/'
      ],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/1/'
    },
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/5/',
        'https://swapi-trybe.herokuapp.com/api/people/68/',
        'https://swapi-trybe.herokuapp.com/api/people/81/'
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/1/',
        'https://swapi-trybe.herokuapp.com/api/films/6/'
      ],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/2/'
    },
    {
      name: 'Yavin IV',
      rotation_period: '24',
      orbital_period: '4818',
      diameter: '10200',
      climate: 'temperate, tropical',
      gravity: '1 standard',
      terrain: 'jungle, rainforests',
      surface_water: '8',
      population: '1000',
      residents: [],
      films: ['https://swapi-trybe.herokuapp.com/api/films/1/'],
      created: '2014-12-10T11:37:19.144000Z',
      edited: '2014-12-20T20:58:18.421000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/3/'
    },
    {
      name: 'Hoth',
      rotation_period: '23',
      orbital_period: '549',
      diameter: '7200',
      climate: 'frozen',
      gravity: '1.1 standard',
      terrain: 'tundra, ice caves, mountain ranges',
      surface_water: '100',
      population: 'unknown',
      residents: [],
      films: ['https://swapi-trybe.herokuapp.com/api/films/2/'],
      created: '2014-12-10T11:39:13.934000Z',
      edited: '2014-12-20T20:58:18.423000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/4/'
    },
    {
      name: 'Dagobah',
      rotation_period: '23',
      orbital_period: '341',
      diameter: '8900',
      climate: 'murky',
      gravity: 'N/A',
      terrain: 'swamp, jungles',
      surface_water: '8',
      population: 'unknown',
      residents: [],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/2/',
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/6/'
      ],
      created: '2014-12-10T11:42:22.590000Z',
      edited: '2014-12-20T20:58:18.425000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/5/'
    },
    {
      name: 'Bespin',
      rotation_period: '12',
      orbital_period: '5110',
      diameter: '118000',
      climate: 'temperate',
      gravity: '1.5 (surface), 1 standard (Cloud City)',
      terrain: 'gas giant',
      surface_water: '0',
      population: '6000000',
      residents: ['https://swapi-trybe.herokuapp.com/api/people/26/'],
      films: ['https://swapi-trybe.herokuapp.com/api/films/2/'],
      created: '2014-12-10T11:43:55.240000Z',
      edited: '2014-12-20T20:58:18.427000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/6/'
    },
    {
      name: 'Endor',
      rotation_period: '18',
      orbital_period: '402',
      diameter: '4900',
      climate: 'temperate',
      gravity: '0.85 standard',
      terrain: 'forests, mountains, lakes',
      surface_water: '8',
      population: '30000000',
      residents: ['https://swapi-trybe.herokuapp.com/api/people/30/'],
      films: ['https://swapi-trybe.herokuapp.com/api/films/3/'],
      created: '2014-12-10T11:50:29.349000Z',
      edited: '2014-12-20T20:58:18.429000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/7/'
    },
    {
      name: 'Naboo',
      rotation_period: '26',
      orbital_period: '312',
      diameter: '12120',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grassy hills, swamps, forests, mountains',
      surface_water: '12',
      population: '4500000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/3/',
        'https://swapi-trybe.herokuapp.com/api/people/21/',
        'https://swapi-trybe.herokuapp.com/api/people/35/',
        'https://swapi-trybe.herokuapp.com/api/people/36/',
        'https://swapi-trybe.herokuapp.com/api/people/37/',
        'https://swapi-trybe.herokuapp.com/api/people/38/',
        'https://swapi-trybe.herokuapp.com/api/people/39/',
        'https://swapi-trybe.herokuapp.com/api/people/42/',
        'https://swapi-trybe.herokuapp.com/api/people/60/',
        'https://swapi-trybe.herokuapp.com/api/people/61/',
        'https://swapi-trybe.herokuapp.com/api/people/66/'
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/4/',
        'https://swapi-trybe.herokuapp.com/api/films/5/',
        'https://swapi-trybe.herokuapp.com/api/films/6/'
      ],
      created: '2014-12-10T11:52:31.066000Z',
      edited: '2014-12-20T20:58:18.430000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/8/'
    },
    {
      name: 'Coruscant',
      rotation_period: '24',
      orbital_period: '368',
      diameter: '12240',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'cityscape, mountains',
      surface_water: 'unknown',
      population: '1000000000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/34/',
        'https://swapi-trybe.herokuapp.com/api/people/55/',
        'https://swapi-trybe.herokuapp.com/api/people/74/'
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/4/',
        'https://swapi-trybe.herokuapp.com/api/films/5/',
        'https://swapi-trybe.herokuapp.com/api/films/6/'
      ],
      created: '2014-12-10T11:54:13.921000Z',
      edited: '2014-12-20T20:58:18.432000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/9/'
    },
    {
      name: 'Kamino',
      rotation_period: '27',
      orbital_period: '463',
      diameter: '19720',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'ocean',
      surface_water: '100',
      population: '1000000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/22/',
        'https://swapi-trybe.herokuapp.com/api/people/72/',
        'https://swapi-trybe.herokuapp.com/api/people/73/'
      ],
      films: ['https://swapi-trybe.herokuapp.com/api/films/5/'],
      created: '2014-12-10T12:45:06.577000Z',
      edited: '2014-12-20T20:58:18.434000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/10/'
    }
  ]
};

const NAME_FILTER = 'name-filter';
const COLUMN_FILTER = 'column-filter';
const COMPARISON_FILTER = 'comparison-filter';
const VALUE_FILTER = 'value-filter';
const BUTTON_FILTER = 'button-filter';
const BUTTON_REMOVE_ALL = 'button-remove-filters';
describe('teste para aplicaçãp de requisição a API de platenas', () => {
  //https://pt-br.reactjs.org/docs/testing-recipes.html#act
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_API_TEST)
    });
    await act(async () => {
      render(<App />);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('se há um campo de texto e um campo de numuro, dois  select e um botão de filtro e um botao de remover', async () => {
    expect(screen.getByTestId(NAME_FILTER)).toBeInTheDocument();
    expect(screen.getByTestId(COLUMN_FILTER)).toBeInTheDocument();
    expect(screen.getByTestId(COMPARISON_FILTER)).toBeInTheDocument();
    expect(screen.getByTestId(VALUE_FILTER)).toBeInTheDocument();
    expect(screen.getByTestId(BUTTON_FILTER)).toBeInTheDocument();
    expect(screen.getByTestId(BUTTON_REMOVE_ALL)).toBeInTheDocument();
  });

  test('filtro por nome', async () => {
    userEvent.type(screen.getByTestId(NAME_FILTER), 'oo');
    expect(await screen.findAllByRole('row')).toHaveLength(3);

    userEvent.type(screen.getByTestId(NAME_FILTER), 'Dagobah');
    expect(await screen.findAllByRole('row')).toHaveLength(1);
  });

  test('filtro usando filtro de valor numerico', async () => {
    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'surface_water');
    expect(screen.getByDisplayValue('surface_water')).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'menor que');
    expect(screen.getByDisplayValue('menor que')).toBeInTheDocument();

    userEvent.type(screen.getByTestId(VALUE_FILTER), '40');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/surface_water menor que 040/)).toBeInTheDocument();
    expect(await screen.findAllByRole('row')).toHaveLength(7);
  });
  test('comparison igual', async() => {
    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'population');
    expect(screen.getByDisplayValue('population')).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'igual a');
    expect(screen.getByDisplayValue('igual a')).toBeInTheDocument();

    userEvent.type(screen.getByTestId(VALUE_FILTER), '200000');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/population igual a 0200000/)).toBeInTheDocument();
    expect(await screen.findAllByRole('row')).toHaveLength(2);
  });
  test('comparison maior que', async() => {
    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'diameter');
    expect(screen.getByDisplayValue('diameter')).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'maior que');
    expect(screen.getByDisplayValue('maior que')).toBeInTheDocument();

    userEvent.type(screen.getByTestId(VALUE_FILTER), '8900');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/diameter maior que 08900/)).toBeInTheDocument();
    expect(await screen.findAllByRole('row')).toHaveLength(8);
  });

  test('Adicione um filtro e verifique se a tabela foi atualizada com as informações filtradas, depois remova o filtro e verifique se os valores da tabela voltaram ao original', async() => {
    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'diameter');

    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'maior que');

    userEvent.type(screen.getByTestId(VALUE_FILTER), '8900');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/diameter maior que 08900/)).toBeInTheDocument();
    expect(await screen.findAllByRole('row')).toHaveLength(8);

    userEvent.click(screen.getByRole('button', {  name: /✖️/i}))
    expect(await screen.findAllByRole('row')).toHaveLength(11);

  });
  test('adicione 2 filtros, e remova um, verifica se o outro filtro continua', async() => {
    // ============================== PRIMEIRO FILTRO ==============================

    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'diameter');
    expect(screen.getByDisplayValue('diameter')).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'maior que');
    expect(screen.getByDisplayValue('maior que')).toBeInTheDocument();

    userEvent.type(screen.getByTestId(VALUE_FILTER), '8900');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/diameter maior que 08900/)).toBeInTheDocument();

    // ============================== SEGUNDO FILTRO ==============================
    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'population');
    
    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'menor que');
    expect(screen.getByDisplayValue('menor que')).toBeInTheDocument();

    userEvent.clear(screen.getByTestId(VALUE_FILTER));
    userEvent.type(screen.getByTestId(VALUE_FILTER), '1000000');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/population menor que 1000000/)).toBeInTheDocument();
    expect(await screen.findAllByRole('row')).toHaveLength(3);
    // ======================= REMOVE FILTROS ======================= 
    userEvent.click(screen.getByTestId('button-remove-population'))
    expect(await screen.findAllByRole('row')).toHaveLength(8);

    userEvent.click(screen.getByTestId('button-remove-diameter'))
    expect(await screen.findAllByRole('row')).toHaveLength(11);
  });

  test('Adicione três filtros e clique no botão Remover Filtragens, todos os filtros deverão ser removidos,',async()=>{
    // ============================== PRIMEIRO FILTRO ==============================

    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'diameter');
    expect(screen.getByDisplayValue('diameter')).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'maior que');
    expect(screen.getByDisplayValue('maior que')).toBeInTheDocument();

    userEvent.type(screen.getByTestId(VALUE_FILTER), '8900');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/diameter maior que 08900/)).toBeInTheDocument();

    // ============================== SEGUNDO FILTRO ==============================
    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'population');
    
    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'menor que');
    expect(screen.getByDisplayValue('menor que')).toBeInTheDocument();

    userEvent.clear(screen.getByTestId(VALUE_FILTER));
    userEvent.type(screen.getByTestId(VALUE_FILTER), '1000000');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/population menor que 1000000/)).toBeInTheDocument();
    
    // ============================== TERCEIRO FILTRO ==============================
    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'rotation_period');
    
    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'igual a');
    expect(screen.getByDisplayValue('igual a')).toBeInTheDocument();

    userEvent.clear(screen.getByTestId(VALUE_FILTER));
    userEvent.type(screen.getByTestId(VALUE_FILTER), '23');

    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByText(/rotation_period igual a 23/)).toBeInTheDocument();
    expect(await screen.findAllByRole('row')).toHaveLength(2);
    // ======================= REMOVE FILTROS ======================= 
    userEvent.click(screen.getByTestId(BUTTON_REMOVE_ALL))
    expect(await screen.findAllByRole('row')).toHaveLength(11);
  
  })
});
