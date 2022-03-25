import puppeteer from 'puppeteer'

import { getExecutablePath } from './pkg'
import { scriptA } from './scripts/scriptA'

// entrypoint
;(async () => {
  const executablePath = await getExecutablePath()

  const browser = await puppeteer.launch({
    executablePath: chromiumExecutablePath,
    headless: false,
  })

  await scriptA(browser)
})()
