import { ConfigOptionInterface } from '../../index.d'

export const USERNAME_OPTION_NAME = 'username'
export const usernameOption: ConfigOptionInterface = {
  name: USERNAME_OPTION_NAME,
  config: {
    alias: 'u',
    description: 'Username to authenticate with',
    string: true,
    demandOption: true,
  },
}

export const PASSWORD_OPTION_NAME = 'password'
export const passwordOption: ConfigOptionInterface = {
  name: PASSWORD_OPTION_NAME,
  config: {
    alias: 'p',
    description: 'Password to authenticate with',
    string: true,
    demandOption: true,
  },
}

export const DATABASE_OPTION_NAME = 'database'
export const databaseOption: ConfigOptionInterface = {
  name: DATABASE_OPTION_NAME,
  config: {
    alias: 'd',
    description: 'Database to authenticate with',
    string: true,
  },
}

export interface AuthConfigInterface {
  [USERNAME_OPTION_NAME]: string
  [PASSWORD_OPTION_NAME]: string
  [DATABASE_OPTION_NAME]?: string
}
