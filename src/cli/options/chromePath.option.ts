import { ConfigOptionInterface } from '../../index.d'

export const CHROME_PATH_OPTION_NAME = 'chrome-path'
export const chromePathOption: ConfigOptionInterface = {
  name: CHROME_PATH_OPTION_NAME,
  config: {
    description: 'Path to folder containing Chrome executable',
    string: true,
  },
}

export interface ChromePathConfigInterface {
  [CHROME_PATH_OPTION_NAME]: boolean
}
