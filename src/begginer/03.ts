// 配列の長さを返すLength<T>を実装してください。

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type Person = {
  name: string;
  age: number;
};

type Length<T extends any[]> = T["length"];

/*
 * Tにteslaが入ってきた場合、T["length"] = tesla["length"] = 4になる
 * 型["length"] で配列の長さを取得できる
 
 * extends any[] で配列のみを受け付けるようにしている
 * extends any[] がないと、Length<number> などが通ってしまうが、受け付けてるのは配列のみなのでコンパイルエラーしてくれる
 
 もし配列にしたいなら

  type Person = {
    name: string;
    age: number;
  }[]

  とすると、Person[]が受け付けられる

  * この場合のLengthはPerson[]の長さは1になる
 */

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
// type personLength = Length<Person>; → expected error
