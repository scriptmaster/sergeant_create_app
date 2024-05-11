import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./components/header";
import Home from "./pages/home/home";
import Files from "./pages/files/files";
import Settings from "./pages/settings/settings";
import Account from "./pages/account/account";

export default function App() {
    // ... // ... 
    const router = createBrowserRouter([{
        path: "/",
        element: <Home />,
        // loader: rootLoader,
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
