import { NavLink, Outlet } from "react-router-dom";

import css from "./App.module.scss";

function App() {
  return (
    <div className={css.app}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="new-art">New Art</NavLink>
          </li>
          <li>
            <NavLink to="last-art">Load last Art</NavLink>
          </li>
          <li>
            <NavLink to="previous-arts">See previous Arts</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
