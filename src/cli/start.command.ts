import { CommandModule } from 'yargs'

import { headlessOption } from './options/headless.options'

export const startCommand: CommandModule = {
  command: 'start',
  describe: 'Start the application',
  handler: () => undefined,
  builder: yargsInstance => {
    return yargsInstance.option(headlessOption.name, headlessOption.config)
  },
}
