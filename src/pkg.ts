// pkg+puppeteer glue from https://github.com/rocklau/pkg-puppeteer

import path from 'path'
import puppeteer from 'puppeteer'

export const getExecutablePath = (): string => {
  // @ts-ignore
  const isPkg: boolean = typeof process.pkg !== 'undefined'

  //mac path replace
  let chromiumExecutablePath: string = isPkg
    ? puppeteer
        // @ts-ignore
        .executablePath()
        .replace(
          /^.*?\/node_modules\/puppeteer\/\.local-chromium/,
          path.join(path.dirname(process.execPath), 'chromium'),
        )
    : // @ts-ignore
      puppeteer.executablePath()

  console.log(process.platform)

  //check win32
  if (process.platform == 'win32') {
    chromiumExecutablePath = isPkg
      ? puppeteer
          // @ts-ignore
          .executablePath()
          .replace(
            /^.*?\\node_modules\\puppeteer\\\.local-chromium/,
            path.join(path.dirname(process.execPath), 'chromium'),
          )
      : // @ts-ignore
        puppeteer.executablePath()
  }

  return chromiumExecutablePath
}
