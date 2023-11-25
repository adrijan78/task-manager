import { create } from "zustand";
import { Todo } from "../models/Todo";

interface TodosStore {
  todos: Todo[];
  addTask: (todo: Todo) => void;
  deleteTodos: (id: number) => void;
}

const store = (set: any) => ({
  todos: [],
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
});

export const useTodosStore = create<TodosStore>()(store);
