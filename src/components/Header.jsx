import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>LOGO</h1>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}