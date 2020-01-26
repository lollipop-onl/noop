# @lollipop-onl/noop

The "noop" function for TypeScript.

## Installation

```sh
# use yarn
$ yarn add @lollipop-onl/noop

# use npm
$ npm install @lollipop-onl/noop
```

## Usage

This example works when set `compilerOptions.esModuleInterop` is `true` in `tsconfig.json`.

```ts
import { noop, noopLax } from '@lollipop-onl/noop';

noop(); // do nothing
noopLax(1, 'a', []); // accept any arguments
```

## Licence

MIT
