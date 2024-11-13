// Includesを実装してください

type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;

/*
 * TをreadOnlyで変更不可能な読み取り配列にする
 * インデックスアクセス型を使ってUがT[number]のどれかに当てはまるかどうかをboolで判定
 */

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
