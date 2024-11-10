export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

/* _____________ ここにコードを記入 _____________ */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/*
 * MyPickのKにはTodoのプロパティ名が入るように制約
 * P in KでKのプロパティ名が入り、インデックスアクセス型でT[P]を取得
 */

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
