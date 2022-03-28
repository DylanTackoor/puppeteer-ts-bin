import { Arguments, Argv, Options } from 'yargs'

export interface ConfigOptionInterface {
  name: string
  config: Options
}

export type AppConfig = Arguments<{
  start?: boolean
  s?: boolean
}>
