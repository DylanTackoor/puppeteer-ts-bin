import path from 'path'
import puppeteer from 'puppeteer'

import { ConfigOptionInterface } from '../../index.d' 

/** adapter from https://github.com/rocklau/pkg-puppeteer */
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

  return executablePath
}


export const CHROME_PATH_OPTION_NAME = 'chrome-path'
export const chromePathOption: ConfigOptionInterface = {
  name: CHROME_PATH_OPTION_NAME,
  config: {
    description: 'Path to folder containing Chrome executable',
    string: true,
    default: getExecutablePath()
  },
}

export interface ChromePathConfigInterface {
  [CHROME_PATH_OPTION_NAME]: string
}
