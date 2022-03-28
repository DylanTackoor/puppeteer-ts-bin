import yargs, { CommandModule } from 'yargs'
import { hideBin } from 'yargs/helpers'

import type { AppConfig } from './cli.d'

const startCommand: CommandModule = {
  command: 'start',
  describe: 'Start the application',
  handler: () => undefined,
  builder: yargsInstance => {
    return yargsInstance.options('start', {
      alias: 's',
      description: 'Start the application',
      boolean: true,
      default: true,
    })
  },
}

export const cli: AppConfig = yargs(hideBin(process.argv))
  .command(startCommand)
  .alias('v', 'version')
  .version()
  .alias('h', 'help')
  .parseSync()
