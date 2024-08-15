import * as React from "react";
import Home from "./pages/home/home.tsx";
import Files from "./pages/files/files.tsx";
import Settings from "./pages/settings/settings.tsx";
import Account from "./pages/account/account.tsx";

export const routes = [{
  path: "/",
  element: <Home />
}, {
  path: "/files",
  element: <Files />,
}, {
  path: "/settings",
  element: <Settings />,
}, {
  path: "/account",
  element: <Account />,
}];
