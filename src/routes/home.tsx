import { Hono } from 'hono';
import { Home } from '../views/home.js';
import type { SiteData } from '../views/partials/layout.js';

const app = new Hono();

app.get('/', (c) => {
    const siteData: SiteData = {
        title: 'Hello <> World',
        description: 'This is a description',
        image: 'https://example.com/image.png',
    };
    const props = {
        name: 'World',
        siteData: siteData,
    };
    return c.html(<Home {...props} />);
});

export default app;
