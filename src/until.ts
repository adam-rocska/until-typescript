import {Predicate} from "./predicate";
import {TimeoutError} from "./timeout-error";

/**
 * Executes a function repeatedly until it returns true, or a timeout is reached.
 * Performs a promise rejection when the timeout limit is exceeded.
 * @param predicate The function to execute.
 * @param retry The interval in milliseconds between each execution of the function. Defaults to 100ms.
 * @param timeout The maximum time in milliseconds to wait for the function to return true. Defaults to 5000ms.
 * @returns A promise that resolves with true if the function returns true within the timeout, or rejects with an error if the timeout is reached.
 */
export async function until(
  predicate: Predicate,
  timeout: number = 5000,
  retry: number = 100
) {
  if (await predicate()) return;
  const start = Date.now();

  await new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      if (await predicate()) return resolve(clearInterval(interval));
      if (Date.now() - start <= timeout) return;

      clearInterval(interval);
      reject(new TimeoutError('Until predicate timeout.', timeout, retry, predicate));
    }, retry);
  });
}
