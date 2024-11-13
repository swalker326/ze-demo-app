import { Link } from 'react-router-dom';
import './index.css';

function Header() {
  return (
    <div className="flex flex-grow w-full border border-red-500 p-3">
      <div className="flex justify-between w-full">
        <Link to="/">
          <h1 className="text-3xl font-thin">Zephyr Demo Application</h1>
        </Link>
        <ul>
          <Link to="/settings">Settings</Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
