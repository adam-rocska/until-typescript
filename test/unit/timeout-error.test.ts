import {TimeoutError} from "@adam-rocska/until";

describe(`TimeoutError`, () => {
  const message = "test message";
  const timeout = 123;
  const retry = 456;
  const predicate = async () => true;

  it(`should be a subtype of Error.`, async () => {
    const unit = new TimeoutError(message, 123, 456, predicate);
    expect(unit).toBeInstanceOf(Error);
  });
  it(`should have a timeout property exposed.`, async () => {
    const unit = new TimeoutError(message, 123, 456, predicate);
    expect(unit.timeout).toBe(timeout);
  });
  it(`should have a retry property exposed.`, async () => {
    const unit = new TimeoutError(message, 123, 456, predicate);
    expect(unit.retry).toBe(retry);
  });
  it(`should have a predicate property exposed.`, async () => {
    const unit = new TimeoutError(message, 123, 456, predicate);
    expect(unit.predicate).toBe(predicate);
  });
  it(`should forward and assure the error message being set.`, async () => {
    const unit = new TimeoutError(message, 123, 456, predicate);
    expect(unit.message).toEqual(message)
  });
});