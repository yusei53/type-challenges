// Unshiftを実装してください

type Unshift<T extends any[], U> = [U, ...T];

/*
 * 配列の中でスプレッド演算子を使って展開し、Uを先頭にしてTと結合して新しい配列を作成できる
 */

type Result06 = Unshift<[1, 2], 0>; // [0, 1, 2,]
