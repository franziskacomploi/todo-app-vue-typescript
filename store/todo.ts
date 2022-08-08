import { defineStore } from 'pinia';

export interface ToDo {
  id: string;
  label: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ToDoAdd {
  label: string;
}

export interface ToDoUpdate {
  label?: string;
  done?: boolean;
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

const actions = {
  add(todo: ToDoAdd) {
    this.items.push(todo);
  },
  delete(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  },
  update(id: string, update: ToDoUpdate) {
    const items = this.items;
    const index = items.findIndex((item) => !!item && (item as ToDo).id === id);

    items[index] = { ...items[index], ...update, updatedAt: new Date() };
  },
};

export const useToDoStore = defineStore('ToDoStore', {
  state,
  getters,
  actions,
});
