import PageContainer from "../../components/PageContainer";
import "./styles.scss";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpPage() {
  return (
    <PageContainer title="Help" className="help-page">
      <aside>
        <NavLink to="/help" end>
          Introduction
        </NavLink>
        <NavLink to="/help/add">Adding Task</NavLink>
        <NavLink to="/help/remove">Deleting Task</NavLink>
        <NavLink to="/help/change">Changing Status</NavLink>
      </aside>
      <article>
        <Outlet />
      </article>
    </PageContainer>
  );
}
