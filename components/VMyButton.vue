<template>
    <v-btn color="primary">{{ text }}</v-btn>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    text: {
      type: String,
      default: 'Click me'
    }
  })
  </script>