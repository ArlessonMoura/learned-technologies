import React from 'react';
import TableBody from './TableBody';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
}

export default Table;

// name
// rotation_period
// orbital_period
// diameter
// climate
// gravity
// terrain
// surface_water
// population
// films
// created
// edited
// url
