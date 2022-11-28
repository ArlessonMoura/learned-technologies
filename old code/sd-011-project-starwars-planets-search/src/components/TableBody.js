import React, { useContext } from 'react';
import MyContext from './context/MyContext';

function TableBody() {
  const { listAtt } = useContext(MyContext);
  return (
    listAtt.map((planet, index) => (
      <tr key={ index }>
        <td data-testid="planet-name">{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>))
  );
}
export default TableBody;

// name,
// rotation_period: rotationPeriod,
// orbital_period: orbitalPeriod,
// diameter,
// climate,
// gravity,
// terrain,
// surface_water: surfaceWater,
// population,
// films,
// created,
// edited,
// url,
