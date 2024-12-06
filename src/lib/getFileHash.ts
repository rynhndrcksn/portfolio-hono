import { createHash } from 'node:crypto';
import fs from 'fs';

/**
 * Computes the md5 hash of a file and returns hex digest for cache busting purposes.
 *
 * Note: should NOT be used for anything security related, and should only be used for cache busting.
 *
 * @param filePath Location of the file, relative to the root ./src directory.
 * @returns First 8 characters of the hex digest for the file.
 */
export const getFileHash = (filePath: string): string => {
    const fileBuffer = fs.readFileSync(process.cwd() + filePath);
    const hashSum = createHash('md5');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex').substring(0, 8);
};
