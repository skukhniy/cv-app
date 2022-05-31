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
  // set up exp State
  const [expIds, setExpIds] = useState([{
    id: 1,
    coName: '',
    title: '',
    datefrom: '',
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
  // set up exp obj format
  const expObj = ({
    id: (educationIds[educationIds.length - 1].id) + 1,
    coName: '',
    title: '',
    datefrom: '',
    dateTo: '',
  });

  // add btn func for adding edu components
  const handleClickEdu = () => {
    setEducationIds((prevEduIds) => [...prevEduIds, eduObj]);
  };

  // add btn func for exp comp
  const handleClickExp = () => {
    setEducationIds((prevExpIds) => [...prevExpIds, expObj]);
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

  // renders all exp comp windows
  const expComponents = expIds.map((expObjs) => (
    <EducationalExp
      key={expObjs.id}
      id={expObjs.id}
      expIds={expIds}
      setExpIds={setExpIds}
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
          <button id="eduAddBtn" type="button" onClick={handleClickEdu}>Add</button>
        </div>
        <h1 className="title">Work Experience</h1>
        {expComponents}
        <div className="addBtnContainer">
          <button id="eduAddBtn" type="button" onClick={handleClickExp}>Add</button>
        </div>
      </div>
      <Submit final={info} />
    </div>
  );
}

export default App;
