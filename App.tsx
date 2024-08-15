import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./components/header.tsx";
import { routes } from "./routes.tsx";

export default function App() {
    const router = createBrowserRouter(routes);

    return <>
        <Header />
        <main>
            <RouterProvider router={router} />
        </main>
    </>
}
