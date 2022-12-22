/**
 * cloneDeep - clone an object deeply https://stackoverflow.com/a/53771927/10630481
 * @param {object} obj the initial object
 * @return {object} returns the cloned object
 */
export function cloneDeep(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Promise) {
    return obj;
  }

  if (obj instanceof Array) {
    return obj.reduce((arr, item, i) => {
      // eslint-disable-next-line
      arr[i] = cloneDeep(item);
      return arr;
    }, []);
  }

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((newObj, key) => {
      // eslint-disable-next-line
      newObj[key] = cloneDeep(obj[key]);
      return newObj;
    }, {});
  }

  return obj;
}

/**
 * Check whether an object has the property.
 */
const { hasOwnProperty } = Object.prototype;
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}