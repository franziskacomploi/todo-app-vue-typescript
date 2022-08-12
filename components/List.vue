<template>
  <section v-if="items.length > 0">
    <Item v-for="item in items" :key="item.id" :todo="item" />
  </section>
</template>

<script lang="ts" setup>
import { ToDoState } from './../store/todo';

defineProps<{
  items: ToDoState;
}>();
</script>
