import puppeteer from 'puppeteer'

import { argv } from './cli'
import { scriptA } from './scripts/scriptA'
import { CHROME_PATH_OPTION_NAME } from './cli/options/chromePath.option'
import { HEADLESS_OPTION_NAME } from './cli/options/headless.option'

const main = async () => { 
  if (!argv._.includes('start')) {
    return console.log("That's all, folks!")
  }

  console.log('Launching Puppeteer...')

  const browser = await puppeteer.launch({
    executablePath: argv[CHROME_PATH_OPTION_NAME],
    headless: argv[HEADLESS_OPTION_NAME],
  })

  await scriptA(browser)
}

main()
