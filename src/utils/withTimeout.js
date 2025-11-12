export const withTimeout = (fn, ms = 8000) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);

  return fn(controller.signal).finally(() => clearTimeout(timeout));
};
