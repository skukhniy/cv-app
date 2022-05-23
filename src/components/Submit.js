import React from 'react';

export default function Submit({ final }) {
  function submit() {
    console.log(final.firstName);
  }
  return (
    <div>
      <button type="submit" onClick={submit}>Submit</button>
    </div>
  );
}
