/**
 * Gets variable from object, allowing you to step in to that object multiple levels deep.
 * Returns undefined if path can't be walked.
 *
 * @example
 * const a = { b: {c: 123} };
 * getIn(a, ['b', 'c']);
 * // Returns 123
 * @author Justin Steenhuis
 * @returns the value found or undefined when not found
 */
export function getIn<T>(object: T, path: Array<string>): any {
  return path.reduce((acc, p) => (acc ? acc[p] : undefined), object);
}

/**
 * Filters assets by taking a key-values array
 *
 * @author Justin Steenhuis
 * @returns the assets that contain the key-value pairs
 */
export function filterByGetIns<T>(assets: Array<T>, keyValues): Array<T> {
  return assets.filter((asset) =>
    keyValues.reduce(
      (acc, keyValue) =>
        acc && keyValue.values.includes(getIn(asset, keyValue.key)),
      true
    )
  );
}
