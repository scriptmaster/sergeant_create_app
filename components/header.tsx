import * as React from "react";

export function Header() {
    return <header>
        <nav>
            <a href="/">Company + Logo</a>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/files">Files</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    </header>
}
