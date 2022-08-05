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
};

const actions = {};

export const useToDoStore = defineStore('ToDoStore', {
  state,
  getters,
  actions,
});
