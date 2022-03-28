import { Browser } from 'puppeteer'

export const scriptA = async (browser: Browser) => {
  const page = await browser.newPage()
  await page.goto('https://www.google.com')
  await page.close()
}
