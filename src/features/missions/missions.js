import React, { useEffect } from 'react';
import {
  Alert, Button, Container, Table,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, getMissionsStatus, selectAllMissions } from './missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const status = useSelector(getMissionsStatus);
  const missions = useSelector(selectAllMissions);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  return (
    <Container className="mt-4">
      <Table striped bordered hover>
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
            <tr key={mission.id}>
              <td width="15%">
                <b>{mission.mission_name}</b>
              </td>
              <td width="50%">{mission.description}</td>
              <td width="15%" valign="middle" className="text-center">
                <Alert variant="success">Not available</Alert>
              </td>
              <td valign="middle" className="text-center">
                <Button variant="primary">Join mission</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
