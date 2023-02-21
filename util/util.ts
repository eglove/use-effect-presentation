export function replaceAllValuesShallow<ObjectType extends Object>(
  object: ObjectType,
  value?: unknown
) {
  return Object.fromEntries(
    Object.entries(object).map(([key]) => {
      return [key, value];
    })
  ) as unknown as ObjectType;
}
