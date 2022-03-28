import { Arguments, Options } from 'yargs'

import { HeadlessConfigInterface } from './cli/options/headless.options'

export interface ConfigOptionInterface {
  name: string
  config: Options
}

export type AppConfig = Arguments<HeadlessConfigInterface>
