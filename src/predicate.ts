/**
 * A predicate for this library is a function resolving a
 * boolean, without any parameter dependencies, regardless
 * of whether it's a sync or async function.
 */
export type Predicate =
  | (() => boolean)
  | (() => Promise<boolean>)
  ;