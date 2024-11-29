import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import env from './env.js';

const app = new Hono();

app.get('/', (c) => {
    return c.text('Hello Hono!');
});

console.log(`Server is running on http://localhost:${env.PORT}`);

serve({
    fetch: app.fetch,
    port: env.PORT,
});
