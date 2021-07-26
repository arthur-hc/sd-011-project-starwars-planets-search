import React from 'react';
import Context from '../../utils/Context';

const numericOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];
const comparisonOptions = ['maior que', 'menor que', 'igual a'];

function Filters() {
  const { filters, setFilters } = React.useContext(Context);
  const [name, setName] = React.useState('');
  const [column, setColumn] = React.useState(numericOptions[0]);
  const [comparison, setComparison] = React.useState(comparisonOptions[0]);
  const [value, setValue] = React.useState(0);
  const [numericFilters, setNumericFilters] = React.useState([]);
  const [actualNumericOptions, setActualNumericOptions] = React.useState(numericOptions);

  React.useEffect(() => {
    setActualNumericOptions(
      numericOptions.filter((option) => !numericFilters.includes(option)),
    );
  }, [numericFilters]);

  React.useEffect(() => {
    setNumericFilters(filters.filterByNumericValues.map((filter) => filter.column));
  }, [filters]);

  React.useEffect(() => {
    setColumn(actualNumericOptions[0]);
  }, [actualNumericOptions]);

  const handleNameFilterChange = ({ target }) => {
    setName(target.value);
    setFilters({
      ...filters,
      filterByName: {
        name: target.value.toLowerCase(),
      },
    });
  };

  const handleFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  return (
    <section>
      <input
        value={ name }
        onChange={ handleNameFilterChange }
        placeholder="Planet name"
        data-testid="name-filter"
      />
      <select
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {
          actualNumericOptions
            .filter((option) => !numericFilters.includes(option))
            .map((option) => <option key={ option }>{option}</option>)
        }
      </select>
      <select
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        { comparisonOptions.map((option) => <option key={ option }>{option}</option>) }
      </select>
      <input
        type="number"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
        placeholder="0"
        data-testid="value-filter"
      />
      <button type="button" onClick={ handleFilters } data-testid="button-filter">
        Filter
      </button>
    </section>
  );
}

export default Filters;