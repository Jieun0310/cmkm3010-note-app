import React from 'react';

export default function NoteItem({ note }) {
  return (
    <div>
      <li className="note">
        <h2>{note.title}</h2>
        <p>{note.detail}</p>
        <div className="note_footer">
          <div className="date">{note.date.toDate().toLocaleTimeString()}</div>
          <div className="btns">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </li>
    </div>
  );
}
