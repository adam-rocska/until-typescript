import {TimeoutError, until} from "@adam-rocska/until";

test(`It should fail with a rejection/error when the predicate never resolves true.`, async () => {
  const predicate = () => false;

  try {
    await until(predicate, 100, 10);
  } catch (e) {
    expect(e).toBeInstanceOf(TimeoutError);
    const error = e as TimeoutError;
    expect(error.predicate).toBe(predicate);
    expect(error.timeout).toBe(100);
    expect(error.retry).toBe(10);
    expect(error.message).toBe('Until predicate timeout.');
  }
});