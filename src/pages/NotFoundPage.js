import PageContainer from "./../components/PageContainer";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <PageContainer title="Page Not Found" className="not-found-page">
        <p>
          <NavLink to="/" className="not-found-link">
            Click here
          </NavLink>{" "}
          to go to the initial page.
        </p>
      </PageContainer>
    </>
  );
}
