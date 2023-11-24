import { create } from "zustand";
import { Todo } from "../models/Todo";

type TodosStore = {
  todos: Todo[];
};

const store = (set: any) => ({
  todos: [
    {
      id: 1,
      title: "Planned task",
      description: "Lorem ipsun sit dollor amet",
      status: "PLANNED",
    },
    {
      id: 2,
      title: "Ongoing task",
      description: "Lorem ipsun sit dollor amet",
      status: "ONGOING",
    },
    {
      id: 3,
      title: "Done task",
      description: "Lorem ipsun sit dollor amet",
      status: "DONE",
    },
  ],
});

export const useTodosStore = create<TodosStore>()(store);
