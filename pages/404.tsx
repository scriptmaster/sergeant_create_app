/** @jsx h */
import { h } from 'preact';

import { PageProps } from "../types/page.ts";
import Layout from "../layouts/Layout.tsx";

export function NotFound(props: PageProps) {
    return <Layout title="404 - Not Found">
        404
    </Layout>
}
