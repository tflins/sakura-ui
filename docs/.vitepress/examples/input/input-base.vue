<template>
  <sk-input v-model="value" />
  <sk-input model-value="hello world" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('基本使用')
</script>
