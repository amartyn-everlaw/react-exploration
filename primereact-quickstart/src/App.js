import React, { useState, useRef } from 'react';

import { Dialog } from 'primereact/dialog';
import {InputSwitch} from 'primereact/inputswitch';

import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import logo from './logo.svg';
import './App.css';

function App() {
  const [visible, setVisible] = useState('');
  const [allowOverlap, setAllowOverlap] = useState(false);

  const toggle = () => {
    setVisible(false);
    setAllowOverlap(!allowOverlap);
  }

  const footer = (
    <div>
        <Button label="Cancel" icon="pi pi-times" onClick={() => setVisible(false)} />
        <Button label={allowOverlap ? "Disallow" : "Allow"} icon="pi pi-check" onClick={toggle} />
    </div>
  );

  return (
    <div className="App">

      <InputSwitch checked={allowOverlap} onChange={(e) => setVisible(true)} />

      <Dialog header="Allow overlapping Bates" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footer} draggable={false} closable={false}>
          <p>{allowOverlap ? "Are you sure you want to disallow overlap?" : "Are you sure you want to allow overlap?"}</p>
      </Dialog>
 
    </div>
  );
}

export default App;
