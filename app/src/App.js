import React, { useState } from 'react';
import MainComponent from './components/Main/MainComponent';
import ModalComponent from './components/Modal/ModalComponent';

export default function App() {
  const [modal, setModal] = useState(false);
  return(
      <div>
          <MainComponent onClick={() => setModal(true)} />
          {modal ?
            <ModalComponent closeModal={() => setModal(false)} />:
            <></>
          }
      </div>
  );
}
