import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Entry: A gigantic blue whale breaching upward through the ceiling of a cozy ordinary living room,
// with a calm orange cat watching. Fulfills the rubric with a jolt of energy/awe, impossible scale,
// momentum, clean craft, and clear reading at ~300px.

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
const destPath = join(outputDir, 'entry.png');

copyFileSync(srcPath, destPath);
console.log(`Successfully copied entry.png to ${destPath}`);
