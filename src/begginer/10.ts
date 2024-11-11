type Concat<T extends any[], U extends any[]> = [...T, ...U];

/*
 * jsのArray.concat
 * スプレッド演算子を使って、配列TとUを結合して新しい配列を作成
 * どちらも展開しないと結合できないので、...T, ...U
 */

type Result = Concat<[1], [2]>; // expected to be [1, 2]
