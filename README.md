# adobe-cep-template

A templating engine to create new CEP Extensions
for Adobe's Creative Cloud Suite of applications

## Installation

```
npm install
npm run build
```

## Usage

Create a new extension, using settings from config.js

`npm run new`

to create a new extension with an interactive prompt:

`npm run prompt`

### Building your extension

First you need the latest version of the following from Adobe:

-   [ZXPSignCmd.exe](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD/4.0.7)
-   [ExManCmd.exe](https://technologypartners.adobe.com/home/support/exman-com-line-tool.html)

These will need to be globally visible by your system (i.e. via [Path environment variables](https://gist.github.com/jesperorb/836cb398e4bb8dc149902d68d3711295))

In the root of your extension project directory, run

```
npm run new
```

### Future work

Currently features are being tracked on [trello](https://trello.com/b/uz4TeMil/ceptemplate)

Contact [Jim McNulty](mailto:jim@mcnulty.site) if you'd like to pitch in.
