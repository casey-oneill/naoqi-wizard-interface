import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import data from './data/data';

const HOSTNAME = 'http://127.0.0.1:5000';

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
}

const onSay = async (s, setLoading) => {
  const data = { str: s };
  setLoading(true);
  postData('/say', data).then(() => setLoading(false));
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const dialogues = data.dialogues[0]; // TODO: Update from character sheet

  return (
    <>
      <Container>
        <Row>
          <Col>
            {dialogues.map((s, i) => (
              <Button variant="primary" onClick={() => onSay(s, setLoading)}>{`Line ${i}`}</Button>
            ))}
          </Col>
          <Col>
            {data.dialogues.map(i => <h1>{i}</h1>)}
          </Col>
        </Row>
      </Container>
      <Modal show={loading} backdrop="static" centered>
        <Modal.Body className="d-flex justify-content-center">
          <Spinner variant="primary" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default App;
