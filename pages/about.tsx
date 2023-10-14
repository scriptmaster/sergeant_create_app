/** @jsx h */
import { h } from 'preact';

import { PageProps } from "../types/page.ts";
import Layout from "../layouts/Layout.tsx";

export function About(props: PageProps) {
    return <Layout title="About">
        About
    </Layout>
}
