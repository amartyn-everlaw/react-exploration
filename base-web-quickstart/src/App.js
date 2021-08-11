import React, { useState, useRef } from 'react';

import logo from './logo.svg';
import './App.css';
import { Button } from "baseui/button";
import {
  Checkbox,
  LABEL_PLACEMENT,
  STYLE_TYPE
} from "baseui/checkbox";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import {useStyletron} from 'baseui';


function App() {
  const [visible, setVisible] = useState('');
  const [allowOverlap, setAllowOverlap] = useState(false);
  const [css, theme] = useStyletron();

  const toggle = () => {
    setVisible(false);
    setAllowOverlap(!allowOverlap);
  }

  return (
    <div className="App"
      className={css({
        margin: '100px'
      })}>

      <Checkbox checked={allowOverlap} checkmarkType={STYLE_TYPE.toggle}
      onChange={(e) => setVisible(true)} labelPlacement={LABEL_PLACEMENT.right}
      checkmarkType={STYLE_TYPE.toggle_round}
      overrides={{
        Toggle: {
          style: ({$theme, $checked}) => ({
            outline: `1px solid #85AC40`,
            backgroundColor: '#DBECBE',
            transform: $checked ? 'translateX(12px)' : '',
            boxShadow:'0px 1px 3px 0px #727576'
          }),
        },
        ToggleTrack: {
          style: ({$theme}) => ({
            backgroundColor: '#DBECBE',
            width: '30px',
            height: '8px',
            borderRadius: '4px'
          }),
        },
      }}>
      </Checkbox>

      <Modal onClose={() => setVisible(false)} isOpen={visible} animate autoFocus size={SIZE.default} role={ROLE.dialog}>

        <ModalHeader>Allow overlapping Bates</ModalHeader>
        <ModalBody>
          {allowOverlap ? "Are you sure you want to disallow overlapping bates?" : "Are you sure you want to allow overlapping bates?"}
        </ModalBody>
        <ModalFooter>
          <ModalButton kind={ButtonKind.tertiary}>
            Cancel
          </ModalButton>
          <ModalButton onClick={toggle}>{allowOverlap ? "Disallow" : "Allow"}</ModalButton>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default App;
