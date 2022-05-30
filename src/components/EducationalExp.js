import React from 'react';
import DeleteEduComp from './DeleteEduComp';

export default function EducationalExp({
  id, educationIds, setEducationIds,
}) {
  // anytime an input changes, adjust the current eduObj
  function handleChange(e) {
    console.log(e.target.value);
    const { name } = e.target;
    const newEduObjs = [...educationIds];
    const edu = newEduObjs.find((eduObj) => eduObj.id === id);
    edu[name] = e.target.value;
    console.log(newEduObjs);
    setEducationIds(newEduObjs);
  }
  let deleteBtn;
  if (id > 1) {
    deleteBtn = <DeleteEduComp id={id} eduObjs={educationIds} setObjs={setEducationIds} />;
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
