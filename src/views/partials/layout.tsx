import { Footer } from './footer.js';
import { Header } from './header.js';
import { html } from 'hono/html';
import type { SiteData } from '../../lib/siteData.js';
import env from '../../env.js';

export const Layout = (props: SiteData) => html`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${props.title} - ${env.SITE_NAME}</title>

        <!-- Make the search engine overlords happy -->
        <link rel="canonical" href="${props.canonicalUrl}" />
        <meta name="description" content="${props.description}">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keyword"
              content="software developer, developer, portfolio, blog, articles, golang, php, javascript, PNW, Pacific North West">

        <!-- Open Graph -->
        <meta prefix="og: https://ogp.me/ns#">
        <meta property="og:site_name" content="${env.SITE_NAME}">
        <meta property="og:title" content="${props.title}">
        <meta property="og:description" content="${props.description}">
        <meta property="og:type" content="${props.type}">
        <meta property="og:url" content="${props.canonicalUrl}">
        <meta property="og:locale" content="en_US">
        <meta property="og:image" content="${props.imageUrl}">
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <!-- Why no og:image:alt? Read this: https://yoast.com/developer-blog/why-we-dont-set-the-og-image-alt-tag/ -->

        <!-- Twitter/X-->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${props.title}" />
        <meta name="twitter:description" content="${props.description}" />
        <meta name="twitter:image" content="${props.imageUrl}" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <!-- Why no twitter:image:alt? Read this: https://yoast.com/developer-blog/why-we-dont-set-the-og-image-alt-tag/ -->


        <!-- Use an emoji as a favicon: https://css-tricks.com/emoji-as-a-favicon/ -->
        <link rel="icon"
              href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 16 16'><text x='0' y='14'>🐻</text></svg>" />
        <link rel="preload" href="/static/main.css" as="style">
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
