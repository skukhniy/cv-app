/* eslint-disable react/no-unused-state */
import './App.css';
import React, { useState } from 'react';
import GenInfo from './components/GenInfo';
import Submit from './components/Submit';

function App() {
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  return (
    <div>
      <div>App</div>
      <GenInfo info={info} setInfo={setInfo} />
      <Submit final={info} setInfo={setInfo} />
    </div>
  );
}

export default App;
