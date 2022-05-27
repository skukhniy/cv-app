/* eslint-disable react/no-unused-state */
import './App.css';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import GenInfo from './components/GenInfo';
import Submit from './components/Submit';
import EducationalExp from './components/EducationalExp';

function App() {
  const eduObj = (
    {
      id: uniqid(),
      schoolName: '',
      degreeTitle: '',
      dateFrom: '',
      dateTo: '',
    });

  const [educationIds, setEducationIds] = useState([eduObj]);

  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleClick = () => {
    setEducationIds((prevEduIds) => [...prevEduIds, eduObj]);
  };
  const eduComponents = educationIds.map(() => (
    <EducationalExp />
  ));

  return (
    <div>
      <div>App</div>
      <GenInfo info={info} setInfo={setInfo} />
      {eduComponents}
      <button type="button" onClick={handleClick}>Add</button>
      <Submit final={info} />
    </div>
  );
}

export default App;
