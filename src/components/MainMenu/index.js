import "./styles.scss";
import { NavLink } from "react-router-dom";

export default function MainMenu() {
  return (
    <nav className="main-menu">
      <NavLink to="/">Tasks</NavLink>
      <NavLink to="/add">Add</NavLink>
      <NavLink to="/help">Help</NavLink>
    </nav>
  );
}
