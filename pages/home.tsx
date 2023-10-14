/** @jsx h */
import { h } from 'preact';

import { PageProps } from "../types/page.ts";
import Layout from "../layouts/Layout.tsx";

export function Home(props: PageProps) {
    return <Layout title="Welcome">
        Welcome
    </Layout>
}
