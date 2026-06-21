import {createRequire} from 'node:module';
import {createWriteStream} from 'node:fs';
import fs from 'node:fs/promises';
import https from 'node:https';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

const require = createRequire(import.meta.url);
const pagefindVersion = '1.5.2';
const platform = process.platform === 'win32' ? 'windows' : process.platform;
const cpu = process.env.npm_config_arch || os.arch();
const packageName = `@pagefind/${platform}-${cpu}`;
const executableNames =
  platform === 'windows'
    ? ['pagefind_extended.exe', 'pagefind.exe']
    : ['pagefind_extended', 'pagefind'];

function isBinaryAvailable() {
  for (const executable of executableNames) {
    try {
      require.resolve(`${packageName}/bin/${executable}`);
      return true;
    } catch {}
  }

  return false;
}

function download(url, destination) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        response.resume();
        download(response.headers.location, destination).then(resolve, reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        response.resume();
        return;
      }

      const file = createWriteStream(destination);
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    });

    request.setTimeout(120000, () => {
      request.destroy(new Error(`Timed out while downloading ${url}`));
    });
    request.on('error', reject);
  });
}

async function downloadWithRetries(urls, destination, attempts = 3) {
  let lastError;

  for (const url of urls) {
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      try {
        await fs.rm(destination, {force: true});
        await download(url, destination);
        return;
      } catch (error) {
        lastError = error;
        console.warn(
          `Pagefind binary download attempt ${attempt}/${attempts} failed from ${url}.`,
        );
        if (attempt < attempts) {
          await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
        }
      }
    }
  }

  throw lastError;
}

async function main() {
  if (isBinaryAvailable()) {
    return;
  }

  const root = process.cwd();
  const scopeDir = path.join(root, 'node_modules', '@pagefind');
  const targetDir = path.join(scopeDir, `${platform}-${cpu}`);
  const cacheDir = path.join(root, 'node_modules', '.cache', 'pagefind-binary');
  const tarballPath = path.join(cacheDir, `${platform}-${cpu}-${pagefindVersion}.tgz`);
  const extractDir = path.join(cacheDir, `${platform}-${cpu}`);
  const tarballName = `${platform}-${cpu}-${pagefindVersion}.tgz`;
  const tarballUrls = [
    process.env.PAGEFIND_BINARY_TARBALL_URL,
    `https://registry.npmmirror.com/@pagefind/${platform}-${cpu}/-/${tarballName}`,
    `https://registry.npmjs.org/@pagefind/${platform}-${cpu}/-/${tarballName}`,
  ].filter(Boolean);

  console.log(`Pagefind binary ${packageName} is missing; downloading ${pagefindVersion}.`);

  await fs.mkdir(cacheDir, {recursive: true});
  await fs.mkdir(scopeDir, {recursive: true});
  await downloadWithRetries(tarballUrls, tarballPath);

  await fs.rm(extractDir, {recursive: true, force: true});
  await fs.mkdir(extractDir, {recursive: true});

  const tar = spawnSync('tar', ['-xzf', tarballPath, '-C', extractDir], {
    stdio: 'inherit',
    windowsHide: true,
  });

  if (tar.status !== 0) {
    throw new Error('Failed to extract Pagefind binary tarball.');
  }

  await fs.rm(targetDir, {recursive: true, force: true});
  await fs.cp(path.join(extractDir, 'package'), targetDir, {recursive: true});

  if (!isBinaryAvailable()) {
    throw new Error(`Pagefind binary was extracted but ${packageName} is still unavailable.`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
