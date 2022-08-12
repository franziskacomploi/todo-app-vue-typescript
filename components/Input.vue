<template>
  <form @submit.prevent class="form">
    <input
      v-model="todo"
      type="text"
      class="form__input"
      placeholder="Create a ToDo"
    />
    <button class="form__button" :disabled="loading" @click="$emit('save')">
      {{ loading ? 'Loading...' : 'Add' }}
    </button>
  </form>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string;
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'save'): void;
}>();

const todo = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit('update:modelValue', value);
  },
});
</script>

<style scoped>
.form {
  @apply shadow-lg bg-white rounded-lg;

  &__input {
    @apply py-2 px-4 border border-cyan-600 rounded-l-lg focus:outline-cyan-800;
  }

  &__button {
    @apply bg-cyan-600 hover:bg-cyan-800 font-bold text-white border border-cyan-600 rounded-r-lg py-2 px-4;
  }
}
</style>
