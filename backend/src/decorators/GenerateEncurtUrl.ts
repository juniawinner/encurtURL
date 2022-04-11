export function generateEncurtUrl(target: any, propertyKey: string) {
  const getter = () => {
    const generateRandomString = function (length = 9) {
      return Math.random().toString(20).substring(2, length);
    };
    const e_url = generateRandomString();
    return e_url;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
  });
}
