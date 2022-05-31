import React from 'react';
import DeleteEduComp from './DeleteEduComp';

export default function Experience({
  id, expIds, setExpIds,
}) {
  // anytime an input changes, adjust the current eduObj
  function handleChange(e) {
    console.log(e.target.value);
    const { name } = e.target;
    const newEduObjs = [...expIds];
    const edu = newEduObjs.find((eduObj) => eduObj.id === id);
    edu[name] = e.target.value;
    console.log(newEduObjs);
    setExpIds(newEduObjs);
  }
  let deleteBtn;
  if (id > 10) {
    deleteBtn = <DeleteEduComp id={id} eduObjs={expIds} setObjs={setExpIds} />;
  }
  return (
    <div id="EducationalExpContainer">
      {deleteBtn}
      <div className="Info edu2">
        <div>
          <p>School Name:</p>
          <input placeholder="School Name" name="schoolName" onChange={handleChange} />
        </div>
        <div>
          <p>Degree Title:</p>
          <input placeholder="Degree Title" name="degreeTitle" />
        </div>
        <div>
          <p>From:</p>
          <input type="number" min="1900" max="2099" placeholder="YYYY" name="dateFrom" />
        </div>
        <div>
          <p>To:</p>
          <input type="number" min="1900" max="2099" placeholder="YYYY" name="dateTo" />
        </div>
      </div>
    </div>

  );
}
