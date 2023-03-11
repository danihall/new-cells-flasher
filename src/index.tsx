import "./index.module.scss";
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { COUNTDOWN_TIME, LAST_ART_NAME } from "./constants";
import { IArt } from "./custom_types/stored-arts";
import {
  addInArtStorage,
  getStoredArts,
  getLastArt,
  deleteArt,
  saveLastArt,
} from "./helpers/artStorage";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import store, { RootState } from "./store/store";

interface IRequest {
  request: Request;
}

const NewArt = lazy(() => import("./pages/NewArt"));
const LastArt = lazy(() => import("./pages/LastArt"));
const PreviousArts = lazy(() => import("./pages/PreviousArts"));

const actionRegisterArt = async ({ request }: IRequest) => {
  const data = await request.formData();
  const data_to_register = Object.fromEntries(data);
  const cells = (store.getState() as RootState).cellsState.cells;

  if (LAST_ART_NAME in data_to_register) {
    return saveLastArt(cells);
  }

  const new_art = {
    ...data_to_register,
    date: new Date().toString(),
    cells,
  } as IArt;

  return await addInArtStorage(new_art);
};

const actionDeleteArt = async ({ request }: IRequest) => {
  const data = await request.formData();
  return await deleteArt(Object.fromEntries(data));
};

const router = createBrowserRouter([
  {
    path: "/new-cells-flasher",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "new-art",
        action: actionRegisterArt,
        element: (
          <Suspense>
            <NewArt />
          </Suspense>
        ),
      },
      {
        path: "last-art",
        loader: getLastArt,
        action: actionRegisterArt,
        element: (
          <Suspense>
            <LastArt />
          </Suspense>
        ),
      },
      {
        path: "previous-arts",
        action: actionDeleteArt,
        loader: getStoredArts,
        element: (
          <Suspense>
            <PreviousArts />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = document.getElementById("root") as HTMLElement;

root.style.cssText = `--countdown-time: ${COUNTDOWN_TIME}ms`;

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
