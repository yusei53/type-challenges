// MyReturnTypeを実装してください。
// MyReturnTypeは、関数の戻り値の型を返す型です。

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type a = MyReturnType<typeof fn>; // should be "1 | 2"
// リテラル型で 1 | 2 が返ってくる
