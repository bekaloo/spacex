import React, { useEffect } from 'react';
import './Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, join } from './missionSlice';

function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <div className="missions">
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((elem) => (
              <tr key={elem.mission_id}>
                <td>{elem.mission_name}</td>
                <td>{elem.mission_description}</td>
                <td>{elem.joined}</td>
                <td><button type="button" onClick={() => dispatch(join(elem.mission_id))}>Join Mission</button></td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </div>
  );
}

export default Missions;
