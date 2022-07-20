import React, { useEffect } from 'react';
import {
  Alert, Button, Container, Table,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions, getMissionsStatus, selectAllMissions, joinMission,
} from './missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const status = useSelector(getMissionsStatus);
  const missions = useSelector(selectAllMissions);

  const handleJoinMission = (id) => dispatch(joinMission(id));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  return (
    <Container className="mt-4 rounded-3">
      <Table striped width="100%" hover className="bg-light rounded-3 opacity-100">
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
