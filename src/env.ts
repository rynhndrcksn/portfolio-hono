import { config } from 'dotenv';
import path from 'node:path';
import { z } from 'zod';

config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV === 'test' ? '.env.test' : '.env'),
});

const EnvSchema = z.object({
    LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).default('debug'),
    NODE_ENV: z.string().default('development'),
    PORT: z.coerce.number().default(8080),
    SITE_NAME: z.string(),
});

const { data: env, error } = EnvSchema.safeParse(process.env);

if (error) {
    console.error('❌ Invalid env file:');
    console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
    process.exit(1);
}

export default env!;
