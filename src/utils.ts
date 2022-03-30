import { Page } from 'puppeteer'

import { argv } from './cli'
import {
  DATABASE_OPTION_NAME,
  PASSWORD_OPTION_NAME,
  URL_OPTION_NAME,
  USERNAME_OPTION_NAME,
} from './cli/options/auth.option'

export const login = async (page: Page) => {
  await page.goto(`${argv[URL_OPTION_NAME]}/login`, { waitUntil: 'networkidle0' })

  const username = argv[USERNAME_OPTION_NAME]
  const password = argv[PASSWORD_OPTION_NAME]
  const database = argv[DATABASE_OPTION_NAME]

  await page.type('[data-testid="username-field"]', username)
  await page.type('#password-field', password)
  if (database) {
    await page.type('[data-testid="database-field"]', database)
  }
}
