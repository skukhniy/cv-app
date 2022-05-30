import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function DeleteEduComp({ id, eduObjs, setObjs }) {
  function deleteComp() {
    console.log(id);
    const oldObjs = [...eduObjs];
    const newObjs = oldObjs.filter((eduObj) => eduObj.id !== id);
    console.log(newObjs);
    setObjs(newObjs);
  }
  return (
    <div id="deleteBtnContainer">
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <FontAwesomeIcon id="deleteBtn" icon={faTrashAlt} size="lg" onClick={deleteComp} />
    </div>
  );
}
