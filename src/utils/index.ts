/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-prototype-builtins */
export const Format = {
  //use Intl.NumberFormat(), can let number 12345 format to 12,345
  number: (value: number) => new Intl.NumberFormat().format(value),
};

export function has<X extends {}, Y extends PropertyKey>(
  prop: Y,
  obj: X
): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop);
}

export function isObject(obj: unknown): obj is object {
  return Boolean(obj) && typeof obj === "object";
}

export function isString(obj: unknown): obj is string {
  return Boolean(obj) && typeof obj === "string";
}

export function head<T>(list: T[]) {
  return list[0];
}
