#!/usr/bin/env node
import { $, fs, glob } from 'zx';

$.verbose = true;

const manifest = await fs.readJSON('./package.json');

if ((await glob('.eslintrc*')).length || 'eslintConfig' in manifest) {
  await $`eslint '**/*.{js,mjs,ts,tsx,mdx}'`;
}

if ((await glob('.stylelintrc*')).length) {
  await $`stylelint --allow-empty-input '**/*.{css,scss}'`;
}

await $`prettier --plugin=@prettier/plugin-xml --check '**/*.{json,jsonc,md,yml,xml,svg}'`;

if ((await glob('tsconfig.json')).length) {
  await $`tsc --skipLibCheck --noEmit`;
}
