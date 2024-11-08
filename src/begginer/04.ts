// Tuple型からObject型を生成するTupleToObjectを実装してください。

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};

/*
 * TupleObjectは読み取り専用のタプル型を受け取るのでreadonlyの指定が必要
 * Mapped Typeを使って、T[number]をキーにして、T[number]を値にする
 */

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
