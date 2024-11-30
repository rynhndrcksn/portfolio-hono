import { Hono } from 'hono';
import { pinoLogger } from './middlewares/pino-logger.js';
import { requestId } from 'hono/request-id';
import { serve } from '@hono/node-server';
import env from './env.js';
import type { PinoLogger } from 'hono-pino';

// Create a type to assign to Hono so custom variables are type-safe.
type AppBindings = {
    Variables: {
        logger: PinoLogger;
    };
};

const app = new Hono<AppBindings>().use(requestId()).use(pinoLogger());

app.get('/', (c) => {
    return c.text('Hello Hono!');
});

console.log(`Server is running on http://localhost:${env.PORT}`);

serve({
    fetch: app.fetch,
    port: env.PORT,
});
