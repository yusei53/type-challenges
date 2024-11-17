// この型を実装してください
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

/*
 * まず、Tのプロパティを全てreadonlyにするために、readonlyを使う
 * ここでは全てをreadonlyにするので、再帰的な型を使う
 * そのため、T[K]がobject型の場合(今回はx)、再帰的にDeepReadonlyを呼び出し、aとbをreadonlyにする
 * そして、yはobject型ではないので、そのままreadonlyとその値を返す
 */

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

export type Todo = DeepReadonly<X>; // should be same as `Expected`
