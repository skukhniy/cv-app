import React from 'react';
import DeleteEduComp from './DeleteEduComp';

export default function Experience({
  id, expIds, setExpIds,
}) {
  // anytime an input changes, adjust the current eduObj
  function handleChange(e) {
    console.log(e.target.value);
    const { name } = e.target;
    const newExpObjs = [...expIds];
    const exp = newExpObjs.find((eduObj) => eduObj.id === id);
    exp[name] = e.target.value;
    console.log(newExpObjs);
    setExpIds(newExpObjs);
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
          <p>Company:</p>
          <input placeholder="Company" name="coName" onChange={handleChange} />
        </div>
        <div>
          <p>Job Title:</p>
          <input placeholder="Title" name="title" onChange={handleChange} />
        </div>
        <div>
          <p>From:</p>
          <input type="number" min="1900" max="2099" placeholder="YYYY" name="dateFrom" onChange={handleChange} />
        </div>
        <div>
          <p>To:</p>
          <input type="number" min="1900" max="2099" placeholder="YYYY" name="dateTo" onChange={handleChange} />
        </div>
      </div>
    </div>

  );
}
