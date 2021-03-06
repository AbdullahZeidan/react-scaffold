react-scaffold
=================

### **_Please ignore this README for now._**

Scaffold your React app from the command line.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g react-scaffoldx
$ rsx COMMAND
running command...
$ rsx (--version)
react-scaffoldx/0.2.1 linux-x64 node-v16.15.0
$ rsx --help [COMMAND]
USAGE
  $ rsx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rsx component`](#rsx-component)
* [`rsx help [COMMAND]`](#rsx-help-command)

## `rsx component`

Scaffold a React component

```
USAGE
  $ rsx component [-d <value>] [--typescript] [--scss]

FLAGS
  -d, --dest=<value>  [default: src/components] Destination folder
  --scss              Use scss as the stylesheet
  --typescript        Create a TypeScript component

DESCRIPTION
  Scaffold a React component

EXAMPLES
  $ rsx component ComponentOne ComponentTwo

  $ rsx component ComponentOne --typescript -scss --dest src/components/layout
```

_See code: [dist/commands/component.ts](https://github.com/AbdullahZeidan/react-scaffold/blob/v0.2.1/dist/commands/component.ts)_

## `rsx help [COMMAND]`

Display help for rsx.

```
USAGE
  $ rsx help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for rsx.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_
<!-- commandsstop -->
