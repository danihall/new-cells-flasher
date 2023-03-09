import "./index.module.scss";
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { LAST_ART_NAME } from "./constants";
import { IArt } from "./custom_types/stored-arts";
import {
  addInArtStorage,
  getStoredArts,
  getLastArt,
  deleteArt,
  saveLastArt,
} from "./helpers/artStorage";
import Home from "./pages/home";
import store, { RootState } from "./store/store";

const NewArt = lazy(() => import("./pages/NewArt"));
const LastArt = lazy(() => import("./pages/LastArt"));
const PreviousArts = lazy(() => import("./pages/PreviousArts"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "new-art",
        action: async ({ request }) => {
          const data = await request.formData();
          const data_to_register = Object.fromEntries(data);
          const cells = (store.getState() as RootState).cellsState.cells;

          if (LAST_ART_NAME in data_to_register) {
            return saveLastArt(cells);
          }

          const new_art = {
            ...data_to_register,
            date: new Date().toLocaleDateString(),
            cells,
          } as IArt;

          return await addInArtStorage(new_art);
        },
        element: (
          <Suspense>
            <NewArt />
          </Suspense>
        ),
      },
      {
        path: "/last-art",
        loader: getLastArt,
        element: (
          <Suspense>
            <LastArt />
          </Suspense>
        ),
      },
      {
        path: "/previous-arts",
        action: async ({ request }) => {
          const data = await request.formData();
          return await deleteArt(Object.fromEntries(data));
        },
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

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
