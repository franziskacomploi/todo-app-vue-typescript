<template>
  <div class="todo">
    <section class="todo__item">
      <h1
        class="todo__item--headline"
        :class="{
          'line-through': todo.done,
        }"
        :title="todo.label"
      >
        {{ todo.label }}
      </h1>
      <p>
        <small class="todo__item--date">
          {{ parsedDate }}
        </small>
      </p>
    </section>

    <section class="todo__icons">
      <BIconCheckCircle
        class="todo__icons--check"
        :class="{
          'text-green-400': todo.done,
          'text-gray-400': !todo.done,
        }"
        @click="updateTodoDone(todo)"
      />
      <BIconXCircle class="todo__icons--exit" @click="deleteTodo(todo.id)" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BIconCheckCircle, BIconXCircle } from 'bootstrap-icons-vue';
import { ToDo, useToDoStore } from './../store/todo';

const props = defineProps<{
  todo: ToDo;
}>();

const todoStore = useToDoStore();
const deleteTodo = (id: string) => todoStore.delete(id);

const updateTodoDone = (todo: ToDo) => {
  const currentState = todo.done;
  todoStore.update(todo.id, { done: !currentState });
};
const parsedDate = computed(() =>
  new Intl.DateTimeFormat('en-US').format(new Date(props.todo.createdAt))
);
</script>

<style scoped>
svg {
  @apply h-8 w-8;
}
.todo {
  @apply bg-white rounded-md shadow-md p-4 px-6 flex flex-row items-center justify-center gap-4 mb-5;

  &__item {
    @apply flex flex-col overflow-hidden whitespace-nowrap;

    &--headline {
      @apply text-xl text-cyan-800 select-none font-light;
    }

    &--date {
      @apply text-cyan-500;
    }
  }

  &__icons {
    @apply flex flex-row items-center;

    &--check {
      @apply text-cyan-800 hover:text-green-600 mr-3 cursor-pointer;
    }

    &--exit {
      @apply text-cyan-800 hover:text-red-600 cursor-pointer;
    }
  }
}
</style>
