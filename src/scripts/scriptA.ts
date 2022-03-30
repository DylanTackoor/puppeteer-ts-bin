import { Browser } from 'puppeteer'

import { login } from '../utils'

export const scriptA = async (browser: Browser) => {
  const page = await browser.newPage()
  await login(page)
}
