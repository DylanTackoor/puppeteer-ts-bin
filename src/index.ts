import puppeteer from 'puppeteer'

import { argv } from './cli'
import { HEADLESS_OPTION_NAME } from './cli/options/headless.option'
import { getExecutablePath } from './pkg'
import { scriptA } from './scripts/scriptA'

const main = async () => {
  if (!argv._.includes('start')) {
    return console.log("That's all, folks!")
  }

  const browser = await puppeteer.launch({
    executablePath: getExecutablePath(),
    headless: argv[HEADLESS_OPTION_NAME],
  })

  await scriptA(browser)
}

main()
