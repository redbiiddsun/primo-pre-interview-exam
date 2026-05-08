# Primo Sorting Exam

TypeScript project for merging three sorted number collections into one ascending result.

## Merge Contract

`Sorter.merge` accepts three arrays with this required order:

- `collection_1`: sorted ascending, from min to max
- `collection_2`: sorted descending, from max to min
- `collection_3`: sorted ascending, from min to max

It returns a new array sorted ascending.

Example:

```ts
import { Sorter } from "./src/sorter";

const sorter = new Sorter();

const result = sorter.merge(
  [1, 3, 5],
  [9, 6, 2],
  [4, 7, 8],
);

console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Requirements

- Node.js
- pnpm or other package maneger

## Setup

Install dependencies:

```sh
pnpm install
```

## Available Commands

Run the sample program:

```sh
pnpm start
```

Run tests:

```sh
pnpm test
```

Run tests in watch mode:

```sh
pnpm test:watch
```

Type-check source code:

```sh
pnpm run typecheck
```

Type-check source code and tests:

```sh
pnpm run typecheck:test
```

Build TypeScript into `dist`:

```sh
pnpm run build
```

## Project Structure

```txt
src/
  interfaces/
    merge.interface.ts
  index.ts
  sorter.ts
tests/
  sorter.test.ts
```

## Testing Notes

The Jest test suite uses Given/When/Then style comments and covers:

- normal merge behavior
- empty arrays
- duplicate values
- negative numbers
- only `collection_2` populated
- uneven collection lengths
- zero and repeated boundary values
- 100 elements in each input collection
