import moment from 'moment';
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { MdCreate, MdDelete } from 'react-icons/md';

export default function NoteItem({ note }) {
  const navigate = useNavigate();
  async function deleteNote(id) {
    if (confirm('삭제하시겠습니까?')) {
      await deleteDoc(doc(db, 'notes', id));
    }
  }

  function editTodo() {
    navigate('/edit', { state: note });
  }

  return (
    <div>
      <li className="note">
        <h2>{note.title}</h2>
        <p>{note.detail}</p>
        <div className="note_footer">
          <div className="date">
            {/* {moment(note.date.toDate()).format(moment().format('YY-MM-DD , hh:mm:ss'))} */}
            {note.date.toDate().toLocaleString()}
          </div>
          <div className="btns">
            <MdCreate onClick={editTodo} />
            <MdDelete onClick={() => deleteNote(note.id)} />
          </div>
        </div>
      </li>
    </div>
  );
}
