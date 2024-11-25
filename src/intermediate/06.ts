// MyOmit型を定義してください
// MyOmitは、第二引数で指定したキーを除外した型を返す型です

export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K> = { [P in Exclude<keyof T, K>]: T[P] };

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
