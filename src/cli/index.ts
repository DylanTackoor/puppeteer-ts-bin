import yargs, { CommandModule } from 'yargs'
import { hideBin } from 'yargs/helpers'

import { AppConfig } from '../index.d'
import { startCommand } from './start.command'

export const argv = yargs(hideBin(process.argv))
  .command(startCommand)
  .version()
  .alias('v', 'version')
  .alias('h', 'help')
  .parseSync() as AppConfig
