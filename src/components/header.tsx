import { Link } from "react-router-dom";
import { ARTEM_ROUTE, POLYTECH_ROUTE, VLAD_ROUTE } from "../app/routing/config";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to={POLYTECH_ROUTE}>Polytech Pagination</Link>
        </li>
        <li>
          <Link to={ARTEM_ROUTE}>Artem</Link>
        </li>
        <li>
          <Link to={VLAD_ROUTE}>Vlad</Link>
        </li>
      </ul>
    </nav>
  );
}
