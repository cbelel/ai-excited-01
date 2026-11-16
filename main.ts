import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const sourceFile = join(currentDir, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(targetDir, { recursive: true });
copyFileSync(sourceFile, join(targetDir, 'entry.png'));
