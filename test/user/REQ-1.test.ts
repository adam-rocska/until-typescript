import {until} from "@adam-rocska/until";

test(`'until' should resolve early, if the predicate is true from the very beginning.`, async () => {
  jest.spyOn(global.Date, `now`).mockImplementation(() => 0);
  jest.spyOn(global, `setInterval`);
  jest.spyOn(global, `clearInterval`);

  await until(() => true);

  expect(setInterval).not.toHaveBeenCalled();
  expect(clearInterval).not.toHaveBeenCalled();
  expect(Date.now).not.toHaveBeenCalled();

  jest.restoreAllMocks();
});