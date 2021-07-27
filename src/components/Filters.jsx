import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Filters = () => {
  const { setFilterByName, addNewNumericFilter } = useContext(PlanetsContext);
  const [selectedValues, setSelectedValues] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleSelects = ({ target }) => {
    const { name, value } = target;

    setSelectedValues({
      ...selectedValues,
      [name]: value,
    });
  };

  const submitFilter = () => {
    addNewNumericFilter(selectedValues);
    setSelectedValues({
      column: 'population',
      comparison: 'maior que',
      value: '',
    });
  };

  const defaultColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const { column, comparison, value: filterValue } = selectedValues;

  return (
    <>
      <form>
        <label htmlFor="name-filter">
          Filtre um planeta pelo nome:
          <input
            data-testid="name-filter"
            id="name-filter"
            onChange={ ({ target: { value } }) => setFilterByName(value) }
            placeholder="Digite o nome de um planeta"
            type="text"
          />
        </label>
      </form>
      <form>
        <label htmlFor="column-filter">
          <select
            data-testid="column-filter"
            id="column-filter"
            name="column"
            onChange={ handleSelects }
            value={ column }
          >
            {
              defaultColumns.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            data-testid="comparison-filter"
            id="comparison-filter"
            name="comparison"
            onChange={ handleSelects }
            value={ comparison }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            data-testid="value-filter"
            id="value-filter"
            min="0"
            type="number"
            name="value"
            onChange={ handleSelects }
            value={ filterValue }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => submitFilter() }
        >
          Filtrar
        </button>
      </form>
    </>
  );
};

export default Filters;