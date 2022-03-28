# puppeter binary test

Sample puppeteer script with a build script that packages into a binary+chromium folder.

## Usage

1. Add sample scripts
2. `npm run build`
3. `./build/puppeter-bin-macos start`


## Help

Run `--help` for available commands. Currently not displaying the `--headless=false` or `--chrome-path` flags, but they're set to okay defaults for development.

`./build/puppeter-bin-macos --help`

```txt
puppeter-ts-bin-macos [command]

Commands:
  puppeter-ts-bin-macos start  Start the application

Options:
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help
```
