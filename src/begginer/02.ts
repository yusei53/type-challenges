// MyReadonly<T>を実装してください
// MyReadonlyは、Tのプロパティをすべて読み取り専用にする型です

type Todo = {
  title: string;
  description: string;
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
  // readonly[K in keyof T] = "title" → Todo["title"]
};

/*  
  * TにTodoが入ってきた場合、[K in keyof T]には"title"と"description"が入る
  * T[K] = Todo["title"] = stringになり、結果的に
  
  * readonly [K in keyof T]: T[K] = 
  * readonly "title": string; 
  * readonly "description": string; 
  
  * となる
*/

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};
