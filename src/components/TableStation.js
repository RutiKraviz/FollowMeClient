import React from 'react';
import { useSelector } from "react-redux";

export default function TableStation()  {

    const stations = useSelector(state => state.route.stations);

    return (
      <div>
        <h2>List of Stations</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {stations.map(station => (
              <tr key={station.id}>
                <td>{station.longitude}</td>
                <td>{station.latitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };