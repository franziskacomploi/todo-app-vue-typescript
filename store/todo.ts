import { defineStore } from 'pinia';

export interface ToDo {
  id: string;
  label: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ToDoState {
  items: ToDo[] | undefined[];
}

const state = (): ToDoState => ({
  items: [],
});

const getters = {
  getTodoById: (state: ToDoState) => {
    return (id: string) =>
      state.items.find((item) => !!item && (item as ToDo).id === id);
  },
  getSortedTodos: (state: ToDoState) => {
    return [...state.items].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  },
};

const actions = {};

export const useToDoStore = defineStore('ToDoStore', {
  state,
  getters,
  actions,
});
