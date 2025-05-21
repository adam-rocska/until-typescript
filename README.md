# @adam-rocska/until

A lightweight TypeScript/JavaScript utility for repeatedly executing an asynchronous predicate function until it returns `true` or a specified timeout is reached. If the timeout is exceeded, the promise rejects with a `TimeoutError`.

## Features

- **Asynchronous Predicate Execution**: Repeatedly runs an async predicate function until it returns `true`.
- **Configurable Timeout and Retry Interval**: Customize the maximum wait time and retry interval.
- **Error Handling**: Rejects with a custom `TimeoutError` when the timeout is reached.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Zero runtime dependencies and a minimal footprint.
- **Browser and Node.js Support**: Compatible with modern browsers (last 3 years) and Node.js (v14+).
- **Well-Tested**: Includes unit tests for early resolution, timeout rejection, and predicate fulfillment.

## Installation

Install the package via npm or pnpm:

```bash
npm install @adam-rocska/until
```

or

```bash
pnpm add @adam-rocska/until
```

## Usage

The `until` function takes a predicate function, an optional timeout (in milliseconds), and an optional retry interval (in milliseconds). It returns a `Promise` that resolves when the predicate returns `true` or rejects with a `TimeoutError` if the timeout is exceeded.

### Example: Basic Usage

```javascript
import { until } from '@adam-rocska/until';

// Example predicate: checks if a condition is met
async function isReady() {
  // Simulate an async operation (e.g., checking if a resource is available)
  return Math.random() > 0.8; // Returns true ~20% of the time
}

async function main() {
  try {
    await until(isReady, 5000, 100);
    console.log('Condition met!');
  } catch (error) {
    console.error('Failed:', error.message);
  }
}

main();
```

### Example: Handling TimeoutError

```javascript
import { until, TimeoutError } from '@adam-rocska/until';

async function main() {
  try {
    await until(async () => false, 1000, 100); // Will timeout after 1 second
  } catch (error) {
    if (error instanceof TimeoutError) {
      console.error(`Timeout after ${error.timeout}ms with retry interval ${error.retry}ms`);
    }
  }
}

main();
```

### Parameters

| Parameter   | Type        | Description                                                                   | Default |
| ----------- | ----------- | ----------------------------------------------------------------------------- | ------- |
| `predicate` | `Predicate` | An async function that returns a boolean or a Promise resolving to a boolean. | -       |
| `timeout`   | `number`    | Maximum time (in milliseconds) to wait for the predicate to return `true`.    | `5000`  |
| `retry`     | `number`    | Interval (in milliseconds) between each execution of the predicate.           | `100`   |

### Returns

- **Resolves**: `Promise<void>` - Resolves when the predicate returns `true`.
- **Rejects**: `Promise<TimeoutError>` - Rejects with a `TimeoutError` if the timeout is exceeded.

### Types

The library includes TypeScript definitions for type safety.

```typescript
type Predicate = () => boolean | Promise<boolean>;

class TimeoutError extends Error {
  constructor(message: string, timeout: number, retry: number, predicate: Predicate);
  timeout: number;
  retry: number;
  predicate: Predicate;
}
```

## API

### `until(predicate: Predicate, timeout?: number, retry?: number): Promise<void>`

Executes the provided `predicate` function repeatedly until it returns `true` or the `timeout` is reached. The function is executed every `retry` milliseconds.

- **Throws**: `TimeoutError` if the timeout is exceeded.

## Requirements

- **Node.js**: Version 14 or higher (due to async/await and modern JavaScript features).
- **Browsers**: Supports browsers from the last 3 years (see `browserslist` in `package.json`).
- **TypeScript**: Optional, for type safety (version 5.8 or higher recommended).

## Development

To contribute or test the library locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/adam-rocska/until-typescript.git
   ```
2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```
3. Run tests:
   ```bash
   pnpm test
   ```
4. Build the library:
   ```bash
   pnpm build
   ```
5. Check code quality and types:
   ```bash
   pnpm check
   ```

The library uses Jest for testing, ESLint for linting, and `bunchee` for building ES and CommonJS modules.

## Testing

The library includes unit tests covering the following scenarios:
- Early resolution when the predicate returns `true` immediately.
- Rejection with `TimeoutError` when the predicate never returns `true`.
- Successful resolution when the predicate returns `true` within the timeout.

Run `pnpm test` to execute the test suite.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/adam-rocska/until-typescript).

## Support

If you encounter issues or have questions, please file an issue on the [GitHub Issues page](https://github.com/adam-rocska/until-typescript/issues).

## Funding

Support the development of this project via [GitHub Sponsors](https://github.com/sponsors/adam-rocska).

## Author

Created by [Ádám László Rocska](https://adam-rocska.github.io).