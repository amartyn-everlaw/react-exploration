import React, { useState, useRef } from 'react';

import logo from './logo.svg';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
import { Toggle } from 'rsuite';
import { Modal } from 'rsuite';

function App() {
  const [visible, setVisible] = useState('');
  const [allowOverlap, setAllowOverlap] = useState(false);

  const toggle = () => {
    setVisible(false);
    setAllowOverlap(!allowOverlap);
  }

  return (
    <div className="App">
      <Toggle checked={allowOverlap} onChange={(e) => setVisible(true)} />

        <Modal show={visible} onHide={(e) => setVisible(false)}>
          <Modal.Header closeButton={false}>
            <Modal.Title>Allow overlapping Bates</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{allowOverlap ? "Are you sure you want to disallow overlap?" : "Are you sure you want to allow overlap?"}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setVisible(false)} appearance="primary">
              Cancel
            </Button>
            <Button onClick={toggle} appearance="subtle">
              {allowOverlap ? "Disallow" : "Allow"}
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default App;
