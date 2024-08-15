import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./components/header.tsx";
import Home from "./pages/home/home.tsx";
import Files from "./pages/files/files.tsx";
import Settings from "./pages/settings/settings.tsx";
import Account from "./pages/account/account.tsx";

export default function App() {
    const router = createBrowserRouter([{
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
    }]);

    return <>
        <Header />
        <main>
            <RouterProvider router={router} />
        </main>
    </>
}
