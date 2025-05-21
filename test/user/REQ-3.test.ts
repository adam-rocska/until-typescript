import {until} from "@adam-rocska/until";

test(`It should resolve if the predicate is fulfilled within the timeout limit.`, async () => {
  const predicate = jest.fn()
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true);

  await until(predicate, 100, 10);
  /// NOTE: If nothing happened, we're good and it works as expect. If it throws, it failed.
});