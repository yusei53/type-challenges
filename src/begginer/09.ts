type MyAwaited<T> = T extends Promise<infer R> ? R : never;

/*
 * inferでPromiseのジェネリクス型を取得する、型を推論する
 * その型がPromise型である場合、その型を返す
 */

type ExampleType = Promise<string>;

export type Result = MyAwaited<ExampleType>; // string
