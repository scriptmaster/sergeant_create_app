/** @jsx h */
import { h } from 'preact';

import Router from 'preact-router';
import { Home } from "./pages/home.tsx";
import { About } from "./pages/about.tsx";
import { NotFound } from "./pages/404.tsx";

export default function App(props: {url?:string}) {
    return <Router url={props.url}>
        <Home path="/" />
        <About path="/about" />
        {/* <Search path="/search/:query/:advanced?" /> */}
        <NotFound default />
    </Router>;
}
