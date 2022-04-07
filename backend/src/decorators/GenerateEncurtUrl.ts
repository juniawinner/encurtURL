export function generateEncurtUrl(target: any, propertyKey: string | number) {
  const getter = () => {
    let min = 10000;
    let max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
  });
}
