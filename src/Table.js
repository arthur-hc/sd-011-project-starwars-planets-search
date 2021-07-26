import React from 'react';
import MyContext from './MyContext';

function Table() {
  return (
    <MyContext.Consumer>
      { ({ newData }) => (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotatio Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>SurfaceWater</th>
              <th>Population</th>
              <th>Residents</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            { newData.map(({
              name,
              rotation_period: rotatioPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              residents,
              films,
              created,
              edited,
            }, index) => (
              <tr key={ index }>
                <td>{ name }</td>
                <td>{ rotatioPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ residents.length }</td>
                <td>{ films.length }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
              </tr>
            )) }
          </tbody>
        </table>
      ) }
    </MyContext.Consumer>
  );
}

export default Table;
