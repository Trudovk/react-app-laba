import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/polytechpagination">Polytech Pagination</Link>
        </li>
      </ul>
    </nav>
  );
}
