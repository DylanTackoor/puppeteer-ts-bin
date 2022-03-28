import { Arguments, Options } from 'yargs'

import { HeadlessConfigInterface } from './cli/options/headless.option'
import { ChromePathConfigInterface } from './cli/options/chromePath.option'

export interface ConfigOptionInterface {
  name: string
  config: Options
}

export type AppConfig = Arguments<HeadlessConfigInterface & ChromePathConfigInterface>
