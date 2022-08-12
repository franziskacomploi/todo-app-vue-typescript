import { setActivePinia, createPinia } from 'pinia';
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} from 'vitest';
import { useToDoStore } from './todo';

beforeAll(() => {
  setActivePinia(createPinia());
});

describe('useToDoStore', () => {
  let store: ReturnType<typeof useToDoStore>;

  beforeEach(() => {
    store = useToDoStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test('references a store', () => {
    expect(store).toBeDefined();
  });

  test('initializes with empty items', () => {
    expect(store.items).toStrictEqual([]);
  });

  test('adds a todo', () => {
    store.add({ label: 'This is a new ToDo' });
    expect(store.items[0]).toBeDefined();
    expect(store.items[0].label).toBe('This is a new ToDo');
  });

  test('gets item by id', () => {
    store.add({ label: 'Clean the kitchen' });
    const item = store.getTodoById('1');
    expect(item.label).toBe('Clean the kitchen');
  });
});
