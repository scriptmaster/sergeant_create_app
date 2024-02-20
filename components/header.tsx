import * as React from "react";

export function Header() {
    return <header>
        <nav>
            <a href="/">Logo + Name</a>
            <ul>
                <li><a href="/docs">Docs</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    </header>
}
