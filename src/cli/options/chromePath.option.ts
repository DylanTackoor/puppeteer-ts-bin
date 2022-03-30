import path from 'path'
import puppeteer from 'puppeteer'

import { ConfigOptionInterface } from '../../index.d'

/** adapted from https://github.com/rocklau/pkg-puppeteer */
const getExecutablePath = (): string => {
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

  // Wow asking Copilot for relativie path was easir than StackOverflow Googling
  const relativeExecutablePath = path.relative(process.cwd(), executablePath)

  return relativeExecutablePath
}

export const CHROME_PATH_OPTION_NAME = 'chrome-path'
export const chromePathOption: ConfigOptionInterface = {
  name: CHROME_PATH_OPTION_NAME,
  config: {
    alias: 'c',
    description: 'Path to folder containing Chrome executable. Default calculated at runtime.',
    string: true,
    default: getExecutablePath(),
  },
}

export interface ChromePathConfigInterface {
  [CHROME_PATH_OPTION_NAME]: string
}
