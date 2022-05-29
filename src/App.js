/* eslint-disable react/no-unused-state */
import './App.css';
import React, { useState } from 'react';
// import uniqid from 'uniqid';
import GenInfo from './components/GenInfo';
import Submit from './components/Submit';
import EducationalExp from './components/EducationalExp';

function App() {
  // set up genInfo State
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // set up eduState
  const [educationIds, setEducationIds] = useState([{
    id: 1,
    schoolName: '',
    degreeTitle: '',
    dateFrom: '',
    dateTo: '',
  }]);

  // set up education exp obj Format
  const eduObj = (
    {
      id: (educationIds[educationIds.length - 1].id) + 1,
      schoolName: '',
      degreeTitle: '',
      dateFrom: '',
      dateTo: '',
    });

  // add btn func for adding edu components
  const handleClick = () => {
    setEducationIds((prevEduIds) => [...prevEduIds, eduObj]);
  };

  // renders all edu component windows
  const eduComponents = educationIds.map((eduObjs) => (
    <EducationalExp
      key={eduObjs.id}
      id={eduObjs.id}
      educationIds={educationIds}
      setEducationIds={setEducationIds}
    />
  ));
  console.log(educationIds[educationIds.length - 1]);

  return (
    <div>
      <div>App</div>
      <GenInfo info={info} setInfo={setInfo} />
      <div className="InfoContainer" id="allEduCompContainer">
        <h1 className="title">Educational</h1>
        {eduComponents}
        <div className="addBtnContainer">
          <button id="eduAddBtn" type="button" onClick={handleClick}>Add</button>
        </div>
      </div>
      <Submit final={info} />
    </div>
  );
}

export default App;
