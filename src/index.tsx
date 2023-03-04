import "./index.module.scss";
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { getStoredArts } from "./helpers/artStorage";
import Home from "./pages/home";
import store from "./store/store";

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
        element: (
          <Suspense>
            <NewArt />
          </Suspense>
        ),
      },
      {
        path: "/last-art",
        element: (
          <Suspense>
            <LastArt />
          </Suspense>
        ),
      },
      {
        path: "/previous-arts",
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
