import React from 'react';

export default function EducationalExp() {
  return (
    <div className="InfoContainer" id="EducationalExpContainer">
      <h1 className="title">Educational Experience</h1>
      <div id="Info">
        <div>
          <p>School Name:</p>
          <input placeholder="School Name" name="schoolName" />
        </div>
        <div>
          <p>Degree Title:</p>
          <input placeholder="Degree Title" name="degreeTitle" />
        </div>
        <div>
          <p>From:</p>
          <input name="dateFrom" />
        </div>
        <div>
          <p>To:</p>
          <input name="dateTo" />
        </div>
      </div>
    </div>

  );
}
