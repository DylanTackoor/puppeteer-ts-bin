import { CommandModule } from 'yargs'
import { chromePathOption } from './options/chromePath.option'

import { headlessOption } from './options/headless.option'

export const startCommand: CommandModule = {
  command: 'start',
  describe: 'Start the application',
  handler: () => undefined,
  builder: yargsInstance => {
    return yargsInstance
      .option(headlessOption.name, headlessOption.config)
      .option(chromePathOption.name, chromePathOption.config)
  },
}
