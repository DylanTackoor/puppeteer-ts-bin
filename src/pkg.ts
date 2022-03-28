// pkg+puppeteer glue adapter from https://github.com/rocklau/pkg-puppeteer
// TODO: replace with chromePath.option.ts

import path from 'path'
import puppeteer from 'puppeteer'

export const getExecutablePath = (): string => {
  // @ts-ignore
  const isPkg: boolean = typeof process.pkg !== 'undefined'
  const isWin = process.platform === 'win32'

  const chromePath = path.join(path.dirname(process.execPath), 'chromium')
  const replaceRegex = isWin
    ? /^.*?\\node_modules\\puppeteer\\\.local-chromium/
    : /^.*?\/node_modules\/puppeteer\/\.local-chromium/

  const executablePath: string = isPkg
    ? puppeteer
        // @ts-ignore
        .executablePath()
        .replace(replaceRegex, chromePath)
    : // @ts-ignore
      puppeteer.executablePath()

  return executablePath
}
