// MyParametersを実装してください
// MyParametersは関数の引数の型をタプルで返す型です

const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T extends (...args: any) => void> = T extends (
  args: infer R
) => void
  ? R
  : never;

/*
 * Tの引数には個数がわからないargsが入ってくるので可変長変数としてぶっこんでおく
 * 可変長変数は配列を返す
 * inferのRにはfooでいう(arg1: string, arg2: number)が入ってくるのでそのまま返してあげればいい
 */

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
