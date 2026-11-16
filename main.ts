import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(join(dir, 'entry.png'), join(out, 'entry.png'));
