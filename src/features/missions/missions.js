import React, { useEffect } from 'react';
import {
  Alert, Button, Container, Table,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getThemeColor } from '../theme/themeSlice';
import {
  fetchMissions,
  getMissionsStatus,
  selectAllMissions,
  joinMission,
} from './missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const status = useSelector(getMissionsStatus);
  const missions = useSelector(selectAllMissions);

  const handleJoinMission = (id) => dispatch(joinMission(id));
  const bgLight = useSelector(getThemeColor);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  const updateColors = bgLight
    ? 'bg-dark text-white rounded-3 opacity-100'
    : 'bg-light text-dark rounded-3 opacity-100';

  return (
    <Container className="mt-4 rounded-3">
      <Table width="100%" className={updateColors}>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td width="15%">
                <b>{mission.mission_name}</b>
              </td>
              <td width="50%">{mission.description}</td>
              <td width="15%" valign="middle" className="text-center">
                {mission.reserved ? (
                  <Alert variant="success" className="p-2 m-0">
                    ACTIVE MEMBER
                  </Alert>
                ) : (
                  <Alert variant="danger" className="p-2 m-0">
                    NOT A MEMBER
                  </Alert>
                )}
              </td>
              <td valign="middle" className="text-center">
                {mission.reserved ? (
                  <Button
                    variant="outline-danger"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Leave Mission
                  </Button>
                ) : (
                  <Button
                    variant="outline-success"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Join Mission
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
