import { NavLink } from "react-router-dom";

import Paragraph from "../components/Paragraph/Paragraph";

const Error404 = (): JSX.Element => {
  return (
    <>
      <Paragraph>
        Whoops! all the routing is done client-side via React-router. You
        probably tried to refresh the page and the url you're on cannot be
        requested to the server.
      </Paragraph>
      <Paragraph>
        Click this link to go back to the app:
        <NavLink to="https://danihall.github.io/new-cells-flasher/">
          New Cells Flasher
        </NavLink>
      </Paragraph>
    </>
  );
};

export default Error404;
