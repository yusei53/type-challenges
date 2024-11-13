// Firstを実装してください
type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

/*
 * Tは配列であることを制約した後、conditionalTypeの部分でその配列を展開させる
 */

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
