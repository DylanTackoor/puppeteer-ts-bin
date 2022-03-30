import { Arguments, Options } from 'yargs'

import { HeadlessConfigInterface } from './cli/options/headless.option'
import { ChromePathConfigInterface } from './cli/options/chromePath.option'
import { AuthConfigInterface } from './cli/options/auth.option'

export interface ConfigOptionInterface {
  name: string
  config: Options
}

export type AppConfig = Arguments<
  HeadlessConfigInterface & ChromePathConfigInterface & AuthConfigInterface
>
