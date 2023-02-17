import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Modal, Row, Spinner, Stack } from 'react-bootstrap';
import SayButton from './components/SayButton';
import data from './data/data';

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
  postData('/sayAnimated', data).then(() => setLoading(false));
}

const getDialogueScreen = (dialogueIndex, introductions, clues, setLoading) => {
  if (dialogueIndex === 0) {
    // Introductions screen
    return (
      <>
        <h4>Introductions</h4>
        {introductions[0].map((s) => (
            <SayButton onSay={() => onSay(s, setLoading)} label={s} />
        ))}
      </>
    );
  } else {
    // Clues screen
    return (
      <>
        <h4>{`Clues for Question #${dialogueIndex}`}</h4>
        {clues[dialogueIndex - 1].map((s) => (
          <SayButton onSay={() => onSay(s, setLoading)} label={s} />
        ))}
      </>
    );
  }
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const { introductions, clues, common: {commonDialogue, commonActions} } = data;

  const nDialogues = clues.length;

  return (
    <>
      <Container className="p-3">
        <Row>
          <Col>
            <h4>DIALOGUE</h4>
            <Stack gap={3}>
              <ButtonGroup>
                <Button variant="secondary" onClick={() => setDialogueIndex(dialogueIndex - 1)} disabled={dialogueIndex <= 0}>Prev</Button>
                <Button variant="secondary" onClick={() => setDialogueIndex(dialogueIndex + 1)} disabled={dialogueIndex >= nDialogues}>Next</Button>
              </ButtonGroup>
              {getDialogueScreen(dialogueIndex, introductions, clues, setLoading)}
            </Stack>
          </Col>
          <Col>
              <h4>COMMON</h4>
              <Stack gap={3}>
                {commonDialogue.map(s => (
                  <SayButton onSay={() => onSay(s, setLoading)} label={s} />
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
