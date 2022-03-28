import puppeteer from 'puppeteer'

import { argv } from './cli'
import { getExecutablePath } from './pkg'
import { scriptA } from './scripts/scriptA'

const main = async () => {
  if (!argv._.includes('start')) {
    return console.log("That's all, folks!")
  }

  const browser = await puppeteer.launch({
    executablePath: getExecutablePath(),
    headless: false,
  })

  await scriptA(browser)
}

main()
