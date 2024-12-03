import { Hono } from 'hono';
import { Home } from '../views/home.js';
import type { SiteData } from '../lib/siteData.js';

const app = new Hono();

app.get('/', (c) => {
    const siteData: SiteData = {
        canonicalUrl: c.req.url,
        description: 'Full stack software developer that writes blog posts occasionally in the Pacific Northwest.',
        imageUrl: `${c.req.url}static/images/default_og_image.png`,
        title: 'Home',
        type: 'website',
    };
    const props = {
        name: 'World',
        siteData: siteData,
    };
    return c.html(<Home {...props} />);
});

export default app;
