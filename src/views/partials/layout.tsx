import { html } from 'hono/html';
import { Header } from './header.js';
import { Footer } from './footer.js';

export interface SiteData {
    title: string;
    description: string;
    image: string;
    children?: any;
}

export const Layout = (props: SiteData) => html`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${props.title}</title>
        <meta name="description" content="${props.description}">
        <meta prefix="og: https://ogp.me/ns#">
        <meta property="og:type" content="article">
        <meta property="og:title" content="${props.title}">
        <meta property="og:image" content="${props.image}">
        <link rel="stylesheet" href="/static/main.css">
    <body>
    ${(<Header></Header>)}
    <main>
        ${props.children}
    </main>
    ${(<Footer></Footer>)}
    </body>
    </html>
`;
