import env from './env.js';
import home from './routes/home.js';
import { Hono } from 'hono';
import { pinoLogger } from './middlewares/pino-logger.js';
import { requestId } from 'hono/request-id';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import type { PinoLogger } from 'hono-pino';

// Create a type to assign to Hono so custom variables are type-safe.
type AppBindings = {
    Variables: {
        logger: PinoLogger;
    };
};

// Initialize Hono and configure the middlewares and routes.
const app = new Hono<AppBindings>()
    .use('*', requestId())
    .use(pinoLogger())
    .use('/static/*', serveStatic({ root: './' }))
    .route('/', home);

console.log(`Server is running on http://localhost:${env.PORT}`);

serve({
    fetch: app.fetch,
    port: env.PORT,
});
