import React from 'react';
import Printable from './Printable';

export default function Submit({
  final, edu, exp, subState, setSub,
}) {
  const modalContainer = subState;

  function submit() {
    console.log(final.firstName);
    console.log(edu);
    console.log(exp);
    console.log(setSub);
    setSub((
      <Printable
        final={final}
        edu={edu}
        exp={exp}
        setSub={setSub}
      />
    ));
  }
  return (
    <div>
      <button type="submit" onClick={submit}>Submit</button>
      {modalContainer}
    </div>
  );
}
