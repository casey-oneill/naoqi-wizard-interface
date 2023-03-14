import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Modal, Row, Spinner, Stack } from 'react-bootstrap';
import ActionButton from './components/ActionButton';
import SayButton from './components/SayButton';
import { ACTION, ACTIONS, DIALOGUE } from './constants';
import data from './data/data';

const getData = async (url = '') => {
  const response = await fetch(url);
  return response;
};

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
};

const onSay = async (s, setLoading) => {
  const data = { str: s };
  setLoading(true);
  postData('/sayAnimated', data).then(() => setLoading(false));
};

const doAction = async (action, setLoading) => {
  var url = "";
  switch (action) {
    case ACTIONS.FAKE_ERROR:
      url = "/fakeError";
      break;
    case ACTIONS.LOOK_AT_SCREEN:
      url = "/lookAtScreen";
      break;
    default:
      break;
  };

  setLoading(true);
  getData(url).then(() => setLoading(false));
};

const getDialogueScreen = (dialogueIndex, clues, setLoading) => {
  const clue = clues[dialogueIndex];
  var value = null;
  switch (clue.type) {
    case DIALOGUE:
      value = (
        clue.value.map((s, i) => (
          <SayButton onSay={() => onSay(s, setLoading)} label={s} key={`key_${i}`} />
        ))
      );
      break;
    case ACTION:
      value = (
        <ActionButton doAction={() => doAction(clue.value, setLoading)} label={clue.title} />
      );
      break;
    default:
      break;
  };

  return (
    <>
      <h4>{clue.title}</h4>
      {value}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const { clues, common: { commonDialogue } } = data;

  const nDialogues = clues.length;

  return (
    <>
      <Container className="p-3">
        <Row>
          <Col>
            <h4>SCRIPTS</h4>
            <Stack gap={3}>
              <ButtonGroup>
                <Button variant="primary" onClick={() => setDialogueIndex(dialogueIndex - 1)} disabled={dialogueIndex <= 0}>Prev</Button>
                <Button variant="primary" onClick={() => setDialogueIndex(dialogueIndex + 1)} disabled={dialogueIndex >= nDialogues - 1}>Next</Button>
              </ButtonGroup>
              {getDialogueScreen(dialogueIndex, clues, setLoading)}
            </Stack>
          </Col>
          <Col>
            <h4>COMMON</h4>
            <Stack gap={3}>
              {commonDialogue.map((s, i) => (
                <SayButton onSay={() => onSay(s, setLoading)} label={s} key={`key_${i}`} />
              ))}
            </Stack>
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
