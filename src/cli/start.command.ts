import { CommandModule } from 'yargs'

import { chromePathOption } from './options/chromePath.option'
import { headlessOption } from './options/headless.option'
import { usernameOption, passwordOption, databaseOption, urlOption } from './options/auth.option'

export const startCommand: CommandModule = {
  command: 'start',
  describe: 'Start the application',
  handler: () => undefined,
  builder: yargsInstance => {
    return yargsInstance
      .option(headlessOption.name, headlessOption.config)
      .option(chromePathOption.name, chromePathOption.config)
      .option(usernameOption.name, usernameOption.config)
      .option(passwordOption.name, passwordOption.config)
      .option(databaseOption.name, databaseOption.config)
      .option(urlOption.name, urlOption.config)
  },
}
