import { ConfigOptionInterface } from '../../index.d'

export const HEADLESS_OPTION_NAME = 'headless'
export const headlessOption: ConfigOptionInterface = {
  name: HEADLESS_OPTION_NAME,
  config: {
    alias: 'h',
    boolean: true,
    description: 'Show browser window',
    default: false,
  },
}

export interface HeadlessConfigInterface {
  [HEADLESS_OPTION_NAME]: boolean
}
