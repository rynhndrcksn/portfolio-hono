import type { SiteData } from './partials/layout.js';
import { Layout } from './partials/layout.js';

export const Home = (props: { siteData: SiteData; name: string }) => (
    <Layout {...props.siteData}>
        <h1>Hello {props.name}</h1>
    </Layout>
);
