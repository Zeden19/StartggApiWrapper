type EmptyObject = Record<string, never>
export default EmptyObject

export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}