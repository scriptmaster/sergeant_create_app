import * as React from "react";

import { Header } from "./components/header";

export default function App() {
    return <>
        <Header />
        <main className="welcome">
            <h1>Welcome to sergeant React app!</h1>
            <p>This app was created using `sir create react myapp`</p>
        </main>
    </>
}
