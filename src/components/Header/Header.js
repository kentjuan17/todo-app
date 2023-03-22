import "./Header.scss";
import { FaTasks } from "react-icons/fa";
import MainMenu from "../MainMenu";

export default function Header() {
  return (
    <header>
      <div className="title">
        <FaTasks />
        Todo
      </div>
      <MainMenu />
      <div className="author">by Kent Juan</div>
    </header>
  );
}
