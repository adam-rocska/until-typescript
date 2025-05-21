# 1.0.0

## Major

- Initial release of `@adam-rocska/until`, a lightweight TypeScript utility for repeatedly executing an asynchronous predicate until it resolves to `true` or times out.
- Implements the `until` function, which takes an async predicate, optional timeout (default: 5000ms), and optional retry interval (default: 100ms).
- Returns a `Promise` that resolves when the predicate returns `true` or rejects with a `TimeoutError` if the timeout is exceeded.
- Includes TypeScript support with full type definitions for `Predicate` and `TimeoutError`.
- Provides zero runtime dependencies and compatibility with Node.js (v14+) and modern browsers (last 3 years).
- Includes unit tests covering:
  - Early resolution when the predicate is `true` from the start.
  - Rejection with `TimeoutError` when the predicate never resolves to `true`.
  - Successful resolution when the predicate becomes `true` within the timeout.
- Published with CommonJS and ES Module builds for broad compatibility.

## Minor

none

## Patch

none
