import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className="header">
        <Link to={'/'}>
          <h1>📗나의 노트</h1>
        </Link>
        <Link to={'/Write'}>
          <button>쓰기</button>
        </Link>
      </div>
    </div>
  );
}
