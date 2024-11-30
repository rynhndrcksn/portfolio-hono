import { pinoLogger as logger } from 'hono-pino';
import pino from 'pino';
import pretty from 'pino-pretty';

import env from '../env.js';

export function pinoLogger() {
    return logger({
        // @ts-ignore
        pino: pino(
            {
                level: env.LOG_LEVEL || 'info',
            },
            // On development, write logs to stdout.
            // On production, write logs to ./logs/portfolio-logs.json asynchronously.
            // More info: https://getpino.io/#/docs/asynchronous
            env.NODE_ENV === 'production'
                ? pino.destination({
                      dest: './logs/portfolio-logs.json',
                      minLength: 2048,
                      sync: false,
                  })
                : pretty(),
        ),
    });
}
