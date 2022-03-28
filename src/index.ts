import puppeteer from 'puppeteer'

import { cli } from './cli'
import { getExecutablePath } from './pkg'
import { scriptA } from './scripts/scriptA'

const main = async () => {
  if (!cli.start && !cli.s) {
    return console.log("That's all, folks!")
  }

  const executablePath = await getExecutablePath()
  const browser = await puppeteer.launch({
    executablePath,
    headless: false,
  })

  await scriptA(browser)
}

main()
