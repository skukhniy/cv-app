import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function DeleteEduComp({ id, eduObjs, setObjs }) {
  function deleteComp() {
    const oldObjs = [...eduObjs];
    const newObjs = oldObjs.filter((eduObj) => eduObj.id !== id);
    setObjs(newObjs);
  }
  return (
    <div id="deleteBtnContainer">
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <FontAwesomeIcon id="deleteBtn" icon={faTrashAlt} size="lg" onClick={deleteComp} />
    </div>
  );
}
