# puppeteer binary test

Sample puppeteer CLI for distributing some browser automations.

## Usage

### Development

1. `npm i`
2. `npm start -- -u Username -p Password --url https://google.com`

### Production

1. `npm run build`
2. `./build/puppeter-bin-macos start -u Username -p Password --url https://google.com`

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
  -u, --username     Username to authenticate with           [string] [required]
  -p, --password     Password to authenticate with           [string] [required]
  -d, --database     Database to authenticate with                      [string]
      --url          Url to visit. Ex: https://www.google.com[string] [required]
  -v, --version      Show version number                               [boolean]
```

## TODOs
- [ ] replace DIY dockerfile with https://hub.docker.com/r/alekzonder/puppeteer/
- [ ] apply username/password from servers.json?
