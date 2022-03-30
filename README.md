# puppeter binary test

Sample puppeteer script with a build script that packages into a binary+chromium folder.

## Usage

### Development

1. `npm i`
2. `npm start -- -u Username -p Password`

### Production

1. `npm run build`
2. `./build/puppeter-bin-macos start -u Username -p Password`

## Help

Run `--help` for available commands.

`./build/puppeter-bin-macos --help`

```txt
./build/puppeter-ts-bin-macos start --help
puppeter-ts-bin-macos start

Start the application

Options:
  -h, --headless     Show help                        [boolean] [default: false]
  -c, --chrome-path  Path to folder containing Chrome executable. Default
                     calculated at runtime.                   [string] [default:
    "build/chromium/mac-970485/chrome-mac/Chromium.app/Contents/MacOS/Chromium"]
  -u, --username     Username to authenticate with                      [string]
  -p, --password     Password to authenticate with                      [string]
  -d, --database     Database to authenticate with                      [string]
  -v, --version      Show version number                               [boolean]
```

## TODOs

- [ ] apply username/password from servers.json?
