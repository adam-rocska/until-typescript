import {Predicate} from "./predicate";

export class TimeoutError extends Error {
  readonly timeout: number;
  readonly retry: number;
  readonly predicate: Predicate;

  constructor(
    message: string,
    timeout: number,
    retry: number,
    predicate: Predicate,
    options?: ErrorOptions
  ) {
    super(message, options);
    this.timeout = timeout;
    this.retry = retry;
    this.predicate = predicate;
  }
}