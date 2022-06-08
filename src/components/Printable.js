import React from 'react';

export default function Printable({
  final, edu, exp, setSub,
}) {
  function exitModal() {
    console.log(edu);
    setSub(null);
  }
  const degreeComponents = edu.map((eduObjs) => (
    <div>
      <h3>{eduObjs.schoolName}</h3>
      <h4>{eduObjs.degreeTitle}</h4>
      <h5>{`${eduObjs.dateFrom}-${eduObjs.dateTo}`}</h5>
    </div>
  ));

  const workComponents = exp.map((expObjs) => (
    <div>
      <h3>{expObjs.coName}</h3>
      <h4>{expObjs.title}</h4>
      <h5>{`${expObjs.dateFrom}-${expObjs.dateTo}`}</h5>
    </div>
  ));
  const name = `${final.firstName} ${final.lastName}`;
  return (
    <div id="modalContainer">
      <div>
        <button type="button" onClick={exitModal}>X</button>
      </div>
      {/* general info */}
      <div>
        <h1>{name}</h1>
        <h4>{final.phone}</h4>
        <h4>{final.email}</h4>
      </div>
      <div>
        <h1>Education</h1>
        {degreeComponents}
      </div>
      <div>
        <h1>Work Experience</h1>
        {workComponents}
      </div>
    </div>
  );
}
