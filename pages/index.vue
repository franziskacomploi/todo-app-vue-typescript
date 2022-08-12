<template>
  <main class="home">
    <section class="header__section">
      <h1 class="header__headline">What is your focus for today?</h1>
    </section>
    <section class="form__section">
      <Input v-model="todo" @save="saveTodo" :loading="loading" />
    </section>
    <section class="list__section">
      <List :items="todoStore.getSortedTodos.reverse()" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToDoStore } from './../store/todo';

const todoStore = useToDoStore();
const todo = ref('');
const loading = ref(false);

const saveTodo = () => {
  loading.value = true;
  todoStore.add({
    label: todo.value,
  });

  todo.value = '';
  loading.value = false;
};
</script>

<style scoped>
.home {
  @apply w-full min-h-screen bg-gray-100;
}
.header {
  &__section {
    @apply text-center pt-12;
  }

  &__headline {
    @apply text-4xl font-light text-cyan-600;
  }
}
.form {
  &__section {
    @apply mt-7 flex items-center justify-center;
  }
}
.list {
  &__section {
    @apply mt-24 flex flex-col items-center;
  }
}
</style>
