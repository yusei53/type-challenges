export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

/* _____________ ここにコードを記入 _____________ */

type MyPick<T, K extends keyof T | string | number | symbol> = {
  [P in K]: P extends keyof T ? T[P] : never;
};

/*
 * 06.tsでも成功したが、解答は上記のように書かれていたためこのファイルを作っておく
 * MyPickのKにはTodoのプロパティ名以外のユニオンが含まれている可能性があるものとする
 * Conditional Typesを使って、PがTのプロパティ名に含まれているかどうかを判定する
 * TにはPというプロパティが存在しない場合never型を返すので、確実にTのプロパティである場合のみオブジェクトを返すようになる
 */

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
