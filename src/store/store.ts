import { create } from "zustand";
import { Todo } from "../models/Todo";
import { persist } from "zustand/middleware";

interface TodosStore {
  todos: Todo[];
  draggedTodo: number;
  addTask: (todo: Todo) => void;
  deleteTodos: (id: number) => void;
  setDraggedTodo: (todoId: number) => void;
  moveTodo: (id: number, status: string) => void;
}

const store = (set: any) => ({
  todos: [] as Todo[],
  draggedTodo: -1,
  addTask: (todoItem: Todo) => {
    const todoItemIndex = Math.floor(Math.random() * 32000);
    todoItem.id = todoItemIndex;
    set((state: any) => ({ todos: [...state.todos, todoItem] }));
  },
  deleteTodos: (id: number) => {
    set((state: any) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    }));
  },
  setDraggedTodo: (todoId: number) => set({ draggedTodo: todoId }),
  moveTodo: (id: number, status: string) =>
    set((store: any) => ({
      todos: store.todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, status } : todo
      ),
    })),
});

export const useTodosStore = create<TodosStore>()(
  persist(store, { name: "store" })
);
