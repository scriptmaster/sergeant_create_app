import * as React from "react";

import { Header } from "./components/header";

export default function App() {
    return <>
        <Header />
        <main className="welcome">
            <h1>Welcome to sergeant React app</h1>
            <p>This app was created with:
                <code><a href="https://github.com/scriptmaster/sergeant#install" target="_blank">sergeant</a> create react myapp</code>
            </p>
        </main>
    </>
}
