import React from 'react';

export default function Submit({ info }) {
  console.log(info);
  function submit() {
    console.log(info);
  }
  return (
    <div>
      <button type="submit" onClick={submit}>Submit</button>
    </div>
  );
}
