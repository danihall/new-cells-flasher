import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../store/store";

import CellsController from "./CellsController";

it("renders cells", () => {
  const { container } = render(
    <Provider store={store}>
      <CellsController />
    </Provider>
  );

  const cells = container.firstElementChild?.children;
  expect(cells?.length).toEqual(9);
});
